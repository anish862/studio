
<?php
/**
 * Registers custom REST API routes for fetching page-specific data.
 */
add_action('rest_api_init', function () {
    register_rest_route('irismorphe/v1', '/page-data', array(
        'methods'  => 'GET',
        'callback' => 'irismorphe_get_page_data_callback',
        'args'     => array(
            'page_key' => array(
                'validate_callback' => function ($param) {
                    return is_string($param) && !empty($param);
                },
                'sanitize_callback' => 'sanitize_key', // Use sanitize_key for slugs/keys
                'required'          => true,
                'description'       => __('Unique key identifying the page content to fetch.', 'irismorphe'),
            ),
        ),
        'permission_callback' => '__return_true', // Allow public access
    ));
});

/**
 * Callback function for the /page-data REST route.
 * Retrieves page data based on the provided page key.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response|WP_Error The REST response containing page data or a WP_Error on failure.
 */
function irismorphe_get_page_data_callback(WP_REST_Request $request): WP_REST_Response | WP_Error
{
    $page_key = $request->get_param('page_key');
    $data     = [];

    // Centralized function mapping keys to data retrieval functions
    $page_data_functions = [
        'home-page'         => 'irismorphe_get_home_page_data',
        'about-page'        => 'irismorphe_get_about_page_data',
        'services-page'     => 'irismorphe_get_services_page_data',
        'work-page'         => 'irismorphe_get_work_page_data',
        'case-studies-page' => 'irismorphe_get_case_studies_page_data',
        'blog-page'         => 'irismorphe_get_blog_page_data',
        'careers-page'      => 'irismorphe_get_careers_page_data',
        'contact-page'      => 'irismorphe_get_contact_page_data',
    ];

    if (isset($page_data_functions[$page_key]) && function_exists($page_data_functions[$page_key])) {
        $data = call_user_func($page_data_functions[$page_key]);
    } else {
        return new WP_Error(
            'no_data_function',
            __('No data retrieval function found for the provided page key.', 'irismorphe'),
            ['status' => 404]
        );
    }

    // Check if data retrieval resulted in an error (e.g., page not found)
    if (is_wp_error($data)) {
        return $data;
    }
    // Check if data is empty (could happen if ACF fields are not set)
    if (empty($data)) {
         return new WP_Error(
             'no_data_found',
             __('No content found for this page key, check if the page exists and content is published.', 'irismorphe'),
             ['status' => 404]
         );
    }


    return new WP_REST_Response($data, 200);
}

/**
 * Retrieves the data for the home page using Advanced Custom Fields (ACF).
 * Uses a dedicated options page or a specific page ID for reliability.
 *
 * @return array|WP_Error The data for the home page or WP_Error if page/ACF not found.
 */
function irismorphe_get_home_page_data(): array | WP_Error
{
    // Option 1: Use an ACF Options Page (Recommended)
    // Replace 'home_page_options' with your actual options page slug if different
    // $page_id = 'option'; // Use 'option' to target options page fields

    // Option 2: Use a specific Page ID or Slug (Less Flexible)
     $home_page = get_page_by_path('home'); // Assumes a page with slug 'home'
     if (!$home_page) {
         // Try finding by title if slug fails
          $home_page = get_page_by_title('Home');
     }
     $page_id = $home_page ? $home_page->ID : 0;

    if (!$page_id && $page_id !== 'option') {
        return new WP_Error('home_page_not_found', __('Home page (slug "home" or title "Home") not found.', 'irismorphe'), ['status' => 404]);
    }

    if (!function_exists('get_field')) {
        return new WP_Error('acf_not_active', __('Advanced Custom Fields plugin is not active.', 'irismorphe'), ['status' => 500]);
    }

    $data = [
        'sliderImages'    => [],
        'aboutTitle'      => get_field('about_section_title', $page_id) ?: __('About Us', 'irismorphe'),
        'aboutDescription'=> get_field('about_section_description', $page_id) ?: __('Default about description.', 'irismorphe'),
        'aboutImageUrl'   => irismorphe_get_acf_image_url(get_field('about_section_image', $page_id), 'large') ?: 'https://picsum.photos/id/1015/500/350',
        'aboutButtonText' => get_field('about_section_button_text', $page_id) ?: __('Discover More', 'irismorphe'),
        'services'        => [],
        'testimonials'    => [],
        'stats'           => [],
    ];

    // Slider Images (Repeater field named 'hero_slider')
    if (have_rows('hero_slider', $page_id)) {
        while (have_rows('hero_slider', $page_id)) {
            the_row();
            $image = get_sub_field('slide_image');
            $data['sliderImages'][] = [
                'url'         => irismorphe_get_acf_image_url($image, 'full') ?: 'https://picsum.photos/1200/600', // Use helper
                'title'       => get_sub_field('slide_title') ?: __('Default Slide Title', 'irismorphe'),
                'description' => get_sub_field('slide_description') ?: __('Default slide description.', 'irismorphe'),
                'buttonText'  => get_sub_field('slide_button_text') ?: __('Read More', 'irismorphe'),
                'buttonLink'  => get_sub_field('slide_button_link') ?: '#',
            ];
        }
    } else {
        // Provide default slides if ACF field is empty
        $data['sliderImages'] = [
             ['url' => 'https://picsum.photos/seed/seo/1200/600', 'title' => 'Organic Growth Experts', 'description' => 'Boost your website\'s visibility...', 'buttonText' => 'Learn SEO', 'buttonLink' => '/services#seo'],
             ['url' => 'https://picsum.photos/seed/social/1200/600', 'title' => 'Social Buzz Creators', 'description' => 'Ignite engagement on social media...', 'buttonText' => 'Explore SMM', 'buttonLink' => '/services#smm'],
             // Add more defaults if needed
        ];
    }


    // Services Section (Repeater field named 'services_section')
    if (have_rows('services_section', $page_id)) {
        while (have_rows('services_section', $page_id)) {
            the_row();
            // Assuming 'service_icon' is a Font Awesome class name field
            $icon_class = get_sub_field('service_icon') ?: 'fas fa-question-circle'; // Default icon
            $data['services'][] = [
                'title'       => get_sub_field('service_title') ?: __('Default Service', 'irismorphe'),
                'description' => get_sub_field('service_description') ?: __('Default service description.', 'irismorphe'),
                // We'll map the icon component on the frontend based on title/slug or a dedicated icon field
                // 'icon' => $icon_class // Or pass the class name if frontend handles it
            ];
        }
    } // No default services needed as frontend has them

    // Testimonials Section (Repeater field named 'testimonials_section')
    if (have_rows('testimonials_section', $page_id)) {
        while (have_rows('testimonials_section', $page_id)) {
            the_row();
            $image = get_sub_field('testimonial_image');
            $data['testimonials'][] = [
                'name'        => get_sub_field('testimonial_name') ?: __('Anonymous', 'irismorphe'),
                'title'       => get_sub_field('testimonial_title') ?: __('Client', 'irismorphe'),
                'testimonial' => get_sub_field('testimonial_content') ?: __('Default testimonial.', 'irismorphe'),
                'imageUrl'    => irismorphe_get_acf_image_url($image, 'thumbnail') ?: 'https://picsum.photos/48/48', // Use helper
            ];
        }
    } // No default testimonials needed as frontend has them

    // Stats Section (Repeater field named 'stats_section')
    if (have_rows('stats_section', $page_id)) {
        while (have_rows('stats_section', $page_id)) {
            the_row();
            $data['stats'][] = [
                'title'            => get_sub_field('stat_title') ?: __('Metric', 'irismorphe'),
                'value'            => get_sub_field('stat_value') ?: 'N/A',
                'trend'            => get_sub_field('stat_trend') ?: 'up', // Default to 'up'
                'percentageChange' => get_sub_field('stat_percentage_change') ?: '+0%',
                 // 'icon' => get_sub_field('stat_icon') ?: 'fas fa-chart-line', // Example if using icon field
            ];
        }
    } // No default stats needed as frontend has them

    return $data;
}

/**
 * Helper function to safely get an ACF image URL.
 *
 * @param mixed $image_field The ACF image field value (ID or array).
 * @param string $size The desired image size (e.g., 'thumbnail', 'medium', 'large', 'full').
 * @return string|null The image URL or null if not found.
 */
function irismorphe_get_acf_image_url($image_field, string $size = 'full'): ?string
{
    if (!$image_field) {
        return null;
    }

    $image_url = null;

    if (is_array($image_field) && isset($image_field['ID'])) {
        // ACF image field returned as array
        $image_url = wp_get_attachment_image_url($image_field['ID'], $size);
    } elseif (is_numeric($image_field)) {
        // ACF image field returned as ID
        $image_url = wp_get_attachment_image_url(intval($image_field), $size);
    }

    return $image_url ?: null; // Return null if URL couldn't be generated
}


// --- Placeholder functions for other pages ---
// Implement these similarly, fetching data from appropriate pages/options/CPTs and using ACF fields

function irismorphe_get_about_page_data() {
    // Fetch data for About page (e.g., from 'about' page slug or options)
    // Use get_field() for team members, story, values etc.
    return [
        'title' => 'About Us (Default)',
        'description' => 'Default description for About Us.',
        'teamMembers' => [
            ['name' => 'Alice (Default)', 'title' => 'CEO', 'imageUrl' => 'https://picsum.photos/id/1005/400/400'],
        ]
    ];
}

function irismorphe_get_services_page_data() {
    // Fetch data for Services page (e.g., from 'services' CPT or page)
    return [
        'title' => 'Our Services (Default)',
        'description' => 'Default description for services.',
        'services' => [
            ['title' => 'Web Dev (Default)', 'description' => 'Default web dev description.', 'price' => '$0+', 'imageUrl' => 'https://picsum.photos/400/200'],
        ]
    ];
}

function irismorphe_get_work_page_data() {
    // Fetch data for Work page (e.g., from 'portfolio' CPT or page)
     return [
        'title' => 'Our Work (Default)',
        'description' => 'Default description for work.',
        'projects' => [
            ['title' => 'Project A (Default)', 'description' => 'Default project description.', 'imageUrl' => 'https://picsum.photos/400/300'],
         ]
     ];
}

function irismorphe_get_case_studies_page_data() {
    // Fetch data for Case Studies page (e.g., from 'case_study' CPT or page)
    return [
        'title' => 'Case Studies (Default)',
        'description' => 'Default description for case studies.',
        'caseStudies' => [
             ['title' => 'Case Study 1 (Default)', 'description' => 'Default case study description.', 'industry' => 'Default', 'imageUrl' => 'https://picsum.photos/400/250'],
        ]
    ];
}

function irismorphe_get_blog_page_data() {
    // Fetch data for Blog page (usually handled by default WP REST API for posts)
    // This function could add extra page-level data if needed (e.g., title from a static page)
    return [
        'title' => 'Blog (Default)',
        'description' => 'Default blog description.',
        // Posts data should ideally be fetched separately using /wp/v2/posts
    ];
}

function irismorphe_get_careers_page_data() {
    // Fetch data for Careers page (e.g., from 'job' CPT or page)
    return [
        'title' => 'Careers (Default)',
        'description' => 'Default careers description.',
        'jobListings' => [
            ['title' => 'Job 1 (Default)', 'description' => 'Default job description.', 'location' => 'Default Location', 'imageUrl' => 'https://picsum.photos/400/220'],
        ]
    ];
}

function irismorphe_get_contact_page_data() {
    // Fetch data for Contact page (e.g., title, description from 'contact' page or options)
     return [
         'title' => 'Contact Us (Default)',
         'description' => 'Default contact description.',
         // Contact form itself is handled client-side
     ];
}
 
    