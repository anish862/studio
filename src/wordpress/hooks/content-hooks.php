<?php
/**
 * Registers a custom REST route to expose page data based on a page key.
 */
add_action('rest_api_init', 'irismorphe_register_page_data_route');

function irismorphe_register_page_data_route() {
    register_rest_route(
        'irismorphe/v1',
        '/page-data',
        array(
            'methods'  => 'GET',
            'callback' => 'irismorphe_get_page_data',
            'args'     => array(
                'page_key' => array(
                    'validate_callback' => function ($param, $request, $key) {
                        return is_string($param);
                    },
                    'sanitize_callback' => 'sanitize_text_field',
                    'required'          => true,
                ),
            ),
        )
    );
}

/**
 * Retrieves page data based on the provided page key.
 *
 * @param WP_REST_Request $request The REST request object.
 * @return WP_REST_Response The REST response containing the page data.
 */
function irismorphe_get_page_data(WP_REST_Request $request) {
    $page_key = $request->get_param('page_key');
    $data     = array();

    switch ($page_key) {
        case 'home-page':
            $data = irismorphe_get_home_page_data();
            break;
        case 'about-page':
            $data = irismorphe_get_about_page_data();
            break;
        case 'services-page':
            $data = irismorphe_get_services_page_data();
            break;
        case 'work-page':
            $data = irismorphe_get_work_page_data();
            break;
        case 'case-studies-page':
            $data = irismorphe_get_case_studies_page_data();
            break;
        case 'blog-page':
            $data = irismorphe_get_blog_page_data();
            break;
        case 'careers-page':
            $data = irismorphe_get_careers_page_data();
            break;
        case 'contact-page':
            $data = irismorphe_get_contact_page_data();
            break;
        default:
            return new WP_Error('no_data', 'No data found for this page key.', array('status' => 404));
    }

    $response = new WP_REST_Response($data);
    $response->set_status(200);

    return $response;
}

/**
 * Retrieves the data for the home page.
 *
 * @return array The data for the home page.
 */
function irismorphe_get_home_page_data() {
    return array(
        'title'       => get_theme_mod('home_page_title', 'Ignite Your Digital Presence'),
        'description' => get_theme_mod('home_page_description', 'Crafting digital experiences that captivate and convert.'),
        'services'    => array(
            array(
                'title'       => get_theme_mod('home_service1_title', 'Web Development'),
                'description' => get_theme_mod('home_service1_description', 'Cutting-edge web solutions tailored to your unique business needs.'),
            ),
            array(
                'title'       => get_theme_mod('home_service2_title', 'Digital Marketing'),
                'description' => get_theme_mod('home_service2_description', 'Elevate your brand with our innovative digital marketing strategies.'),
            ),
            array(
                'title'       => get_theme_mod('home_service3_title', 'SEO Optimization'),
                'description' => get_theme_mod('home_service3_description', 'Drive organic growth and enhance your online visibility.'),
            ),
        ),
        'testimonials' => array(
            array(
                'name'      => get_theme_mod('home_testimonial1_name', 'Alice Johnson'),
                'title'     => get_theme_mod('home_testimonial1_title', 'CEO, Tech Innovations Inc.'),
                'testimonial' => get_theme_mod('home_testimonial1_testimonial', 'AgencyFlow has completely transformed our digital strategy. Their expertise and innovative solutions have significantly boosted our online presence and revenue. Highly recommended!'),
                'imageUrl'  => 'https://picsum.photos/id/237/100/100',
            ),
            array(
                'name'      => get_theme_mod('home_testimonial2_name', 'Bob Williams'),
                'title'     => get_theme_mod('home_testimonial2_title', 'Marketing Director, Global Corp'),
                'testimonial' => get_theme_mod('home_testimonial2_testimonial', 'The team at AgencyFlow is exceptional. Their data-driven approach and creative campaigns have delivered outstanding results. Weve seen a remarkable increase in customer engagement and brand awareness.'),
                'imageUrl'  => 'https://picsum.photos/id/238/100/100',
            ),
        ),
        'stats'      => array(
            array(
                'title'            => get_theme_mod('home_stat1_title', 'Website Traffic'),
                'value'            => get_theme_mod('home_stat1_value', '3.2M'),
                'trend'            => 'up',
                'percentageChange' => '15%',
            ),
            array(
                'title'            => get_theme_mod('home_stat2_title', 'Conversion Rate'),
                'value'            => get_theme_mod('home_stat2_value', '4.8%'),
                'trend'            => 'up',
                'percentageChange' => '8%',
            ),
        ),
    );
}

/**
 * Retrieves the data for the about page.
 *
 * @return array The data for the about page.
 */
function irismorphe_get_about_page_data() {
    return array(
        'title'       => get_theme_mod('about_page_title', 'About Us'),
        'description' => get_theme_mod('about_page_description', 'Meet our team of experts dedicated to delivering exceptional digital solutions.'),
        'teamMembers' => array(
            array(
                'name'      => get_theme_mod('about_member1_name', 'Alice Johnson'),
                'title'     => get_theme_mod('about_member1_title', 'CEO'),
                'description' => get_theme_mod('about_member1_description', 'Visionary leader with a passion for innovation and customer success.'),
                'imageUrl'  => 'https://picsum.photos/id/1005/400/400',
            ),
            array(
                'name'      => get_theme_mod('about_member2_name', 'Bob Williams'),
                'title'     => get_theme_mod('about_member2_title', 'CTO'),
                'description' => get_theme_mod('about_member2_description', 'Technology expert driving our cutting-edge solutions and digital transformations.'),
                'imageUrl'  => 'https://picsum.photos/id/1025/400/400',
            ),
        ),
    );
}

/**
 * Retrieves the data for the services page.
 *
 * @return array The data for the services page.
 */
function irismorphe_get_services_page_data() {
    return array(
        'title'       => get_theme_mod('services_page_title', 'Our Services'),
        'description' => get_theme_mod('services_page_description', 'Empowering your business with innovative solutions and expertise.'),
        'services'    => array(
            array(
                'title'       => get_theme_mod('service1_title', 'Web Development'),
                'description' => get_theme_mod('service1_description', 'We offer custom web development services to meet your business needs.'),
                'price'       => get_theme_mod('service1_price', '$5,000+'),
                'imageUrl'  => 'https://picsum.photos/400/200',
            ),
            array(
                'title'       => get_theme_mod('service2_title', 'Digital Marketing'),
                'description' => get_theme_mod('service2_description', 'Our digital marketing strategies will help you reach a wider audience.'),
                'price'       => get_theme_mod('service2_price', '$3,000+'),
                'imageUrl'  => 'https://picsum.photos/401/200',
            ),
        ),
    );
}

/**
 * Retrieves the data for the work page.
 *
 * @return array The data for the work page.
 */
function irismorphe_get_work_page_data() {
    return array(
        'title'       => get_theme_mod('work_page_title', 'Our Work'),
        'description' => get_theme_mod('work_page_description', 'Showcasing our commitment to excellence and innovation in every project.'),
        'projects'    => array(
            array(
                'title'       => get_theme_mod('project1_title', 'Project A - Tech Innovation'),
                'description' => get_theme_mod('project1_description', 'A successful project for a leading tech company, pushing the boundaries of innovation.'),
                'imageUrl'  => 'https://picsum.photos/400/300',
            ),
            array(
                'title'       => get_theme_mod('project2_title', 'Project B - Creative Design'),
                'description' => get_theme_mod('project2_description', 'A creative project that exceeded client expectations, delivering a stunning visual experience.'),
                'imageUrl'  => 'https://picsum.photos/401/300',
            ),
        ),
    );
}

/**
 * Retrieves the data for the case studies page.
 *
 * @return array The data for the case studies page.
 */
function irismorphe_get_case_studies_page_data() {
    return array(
        'title'       => get_theme_mod('case_studies_page_title', 'Case Studies'),
        'description' => get_theme_mod('case_studies_page_description', 'Discover how we\'ve helped our clients achieve their goals with our expertise and innovative solutions.'),
        'caseStudies' => array(
            array(
                'title'       => get_theme_mod('case_study1_title', 'Client A - Digital Transformation'),
                'description' => get_theme_mod('case_study1_description', 'How we helped Client A transform their business with our digital solutions, achieving remarkable growth.'),
                'industry'    => get_theme_mod('case_study1_industry', 'Healthcare'),
                'imageUrl'  => 'https://picsum.photos/400/250',
            ),
            array(
                'title'       => get_theme_mod('case_study2_title', 'Client B - Marketing Campaign'),
                'description' => get_theme_mod('case_study2_description', 'Our successful marketing campaign for Client B increased their sales by 50%, setting new industry benchmarks.'),
                'industry'    => get_theme_mod('case_study2_industry', 'Retail'),
                'imageUrl'  => 'https://picsum.photos/401/250',
            ),
        ),
    );
}

/**
 * Retrieves the data for the blog page.
 *
 * @return array The data for the blog page.
 */
function irismorphe_get_blog_page_data() {
    return array(
        'title'       => get_theme_mod('blog_page_title', 'Blog'),
        'description' => get_theme_mod('blog_page_description', 'Stay informed with our latest insights and news on digital innovation and marketing strategies.'),
        'posts'       => array(
            array(
                'title'       => get_theme_mod('blog_post1_title', 'The Future of AI in Marketing'),
                'description' => get_theme_mod('blog_post1_description', 'Explore how artificial intelligence is revolutionizing marketing strategies, unlocking new potentials.'),
                'date'        => '2024-07-15',
                'imageUrl'  => 'https://picsum.photos/400/200',
            ),
            array(
                'title'       => get_theme_mod('blog_post2_title', 'Effective SEO Strategies for 2024'),
                'description' => get_theme_mod('blog_post2_description', 'Learn the latest search engine optimization techniques to boost your online presence and reach a wider audience.'),
                'date'        => '2024-07-10',
                'imageUrl'  => 'https://picsum.photos/401/200',
            ),
        ),
    );
}

/**
 * Retrieves the data for the careers page.
 *
 * @return array The data for the careers page.
 */
function irismorphe_get_careers_page_data() {
    return array(
        'title'        => get_theme_mod('careers_page_title', 'Careers'),
        'description'  => get_theme_mod('careers_page_description', 'Join our team and help us build the future with your talent and passion.'),
        'jobListings'  => array(
            array(
                'title'       => get_theme_mod('job1_title', 'Senior Software Engineer'),
                'description' => get_theme_mod('job1_description', 'Join our engineering team to build innovative software solutions that shape the future of technology.'),
                'location'    => get_theme_mod('job1_location', 'San Francisco, CA'),
                'imageUrl'  => 'https://picsum.photos/400/220',
            ),
            array(
                'title'       => get_theme_mod('job2_title', 'Marketing Manager'),
                'description' => get_theme_mod('job2_description', 'Lead our marketing efforts and drive growth with creative and strategic campaigns that resonate with our audience.'),
                'location'    => get_theme_mod('job2_location', 'New York, NY'),
                'imageUrl'  => 'https://picsum.photos/401/220',
            ),
        ),
    );
}

/**
 * Retrieves the data for the contact page.
 *
 * @return array The data for the contact page.
 */
function irismorphe_get_contact_page_data() {
    return array(
        'title'       => get_theme_mod('contact_page_title', 'Contact Us'),
        'description' => get_theme_mod('contact_page_description', 'We\'d love to hear from you. Send us a message using the form below.'),
    );
}
