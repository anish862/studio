<?php
/**
 * Adds theme customization options to the WordPress admin interface.
 */
function irismorphe_customize_register($wp_customize) {

    // Home Page Section
    $wp_customize->add_section('home_page_section', array(
        'title'    => __('Home Page Settings', 'irismorphe'),
        'priority' => 30,
    ));

    // Home Page Title
    $wp_customize->add_setting('home_page_title', array(
        'default'   => 'Ignite Your Digital Presence',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_page_title', array(
        'label'    => __('Home Page Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_page_title',
        'type'     => 'text',
    ));

    // Home Page Description
    $wp_customize->add_setting('home_page_description', array(
        'default'   => 'Crafting digital experiences that captivate and convert.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_page_description', array(
        'label'    => __('Home Page Description', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_page_description',
        'type'     => 'textarea',
    ));

    // Home Service 1 Title
    $wp_customize->add_setting('home_service1_title', array(
        'default'   => 'Web Development',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service1_title', array(
        'label'    => __('Service 1 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service1_title',
        'type'     => 'text',
    ));

    // Home Service 1 Description
    $wp_customize->add_setting('home_service1_description', array(
        'default'   => 'Cutting-edge web solutions tailored to your unique business needs.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service1_description', array(
        'label'    => __('Service 1 Description', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service1_description',
        'type'     => 'textarea',
    ));

    // Home Service 2 Title
    $wp_customize->add_setting('home_service2_title', array(
        'default'   => 'Digital Marketing',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service2_title', array(
        'label'    => __('Service 2 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service2_title',
        'type'     => 'text',
    ));

    // Home Service 2 Description
    $wp_customize->add_setting('home_service2_description', array(
        'default'   => 'Elevate your brand with our innovative digital marketing strategies.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service2_description', array(
        'label'    => __('Service 2 Description', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service2_description',
        'type'     => 'textarea',
    ));

    // Home Service 3 Title
    $wp_customize->add_setting('home_service3_title', array(
        'default'   => 'SEO Optimization',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service3_title', array(
        'label'    => __('Service 3 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service3_title',
        'type'     => 'text',
    ));

    // Home Service 3 Description
    $wp_customize->add_setting('home_service3_description', array(
        'default'   => 'Drive organic growth and enhance your online visibility.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_service3_description', array(
        'label'    => __('Service 3 Description', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_service3_description',
        'type'     => 'textarea',
    ));

    // Home Testimonial 1 Name
    $wp_customize->add_setting('home_testimonial1_name', array(
        'default'   => 'Alice Johnson',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial1_name', array(
        'label'    => __('Testimonial 1 Name', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial1_name',
        'type'     => 'text',
    ));

    // Home Testimonial 1 Title
    $wp_customize->add_setting('home_testimonial1_title', array(
        'default'   => 'CEO, Tech Innovations Inc.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial1_title', array(
        'label'    => __('Testimonial 1 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial1_title',
        'type'     => 'text',
    ));

    // Home Testimonial 1 Testimonial
    $wp_customize->add_setting('home_testimonial1_testimonial', array(
        'default'   => 'AgencyFlow has completely transformed our digital strategy. Their expertise and innovative solutions have significantly boosted our online presence and revenue. Highly recommended!',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial1_testimonial', array(
        'label'    => __('Testimonial 1 Testimonial', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial1_testimonial',
        'type'     => 'textarea',
    ));

    // Home Testimonial 2 Name
    $wp_customize->add_setting('home_testimonial2_name', array(
        'default'   => 'Bob Williams',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial2_name', array(
        'label'    => __('Testimonial 2 Name', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial2_name',
        'type'     => 'text',
    ));

    // Home Testimonial 2 Title
    $wp_customize->add_setting('home_testimonial2_title', array(
        'default'   => 'Marketing Director, Global Corp',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial2_title', array(
        'label'    => __('Testimonial 2 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial2_title',
        'type'     => 'text',
    ));

    // Home Testimonial 2 Testimonial
    $wp_customize->add_setting('home_testimonial2_testimonial', array(
        'default'   => 'The team at AgencyFlow is exceptional. Their data-driven approach and creative campaigns have delivered outstanding results. Weve seen a remarkable increase in customer engagement and brand awareness.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_testimonial2_testimonial', array(
        'label'    => __('Testimonial 2 Testimonial', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_testimonial2_testimonial',
        'type'     => 'textarea',
    ));

    // Home Stat 1 Title
    $wp_customize->add_setting('home_stat1_title', array(
        'default'   => 'Website Traffic',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_stat1_title', array(
        'label'    => __('Stat 1 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_stat1_title',
        'type'     => 'text',
    ));

    // Home Stat 1 Value
    $wp_customize->add_setting('home_stat1_value', array(
        'default'   => '3.2M',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_stat1_value', array(
        'label'    => __('Stat 1 Value', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_stat1_value',
        'type'     => 'text',
    ));

    // Home Stat 2 Title
    $wp_customize->add_setting('home_stat2_title', array(
        'default'   => 'Conversion Rate',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_stat2_title', array(
        'label'    => __('Stat 2 Title', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_stat2_title',
        'type'     => 'text',
    ));

    // Home Stat 2 Value
    $wp_customize->add_setting('home_stat2_value', array(
        'default'   => '4.8%',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('home_stat2_value', array(
        'label'    => __('Stat 2 Value', 'irismorphe'),
        'section'  => 'home_page_section',
        'settings' => 'home_stat2_value',
        'type'     => 'text',
    ));

    // About Page Section
    $wp_customize->add_section('about_page_section', array(
        'title'    => __('About Page Settings', 'irismorphe'),
        'priority' => 31,
    ));

    // About Page Title
    $wp_customize->add_setting('about_page_title', array(
        'default'   => 'About Us',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_page_title', array(
        'label'    => __('About Page Title', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_page_title',
        'type'     => 'text',
    ));

    // About Page Description
    $wp_customize->add_setting('about_page_description', array(
        'default'   => 'Meet our team of experts dedicated to delivering exceptional digital solutions.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_page_description', array(
        'label'    => __('About Page Description', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_page_description',
        'type'     => 'textarea',
    ));

    // About Member 1 Name
    $wp_customize->add_setting('about_member1_name', array(
        'default'   => 'Alice Johnson',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member1_name', array(
        'label'    => __('Member 1 Name', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member1_name',
        'type'     => 'text',
    ));

    // About Member 1 Title
    $wp_customize->add_setting('about_member1_title', array(
        'default'   => 'CEO',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member1_title', array(
        'label'    => __('Member 1 Title', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member1_title',
        'type'     => 'text',
    ));

    // About Member 1 Description
    $wp_customize->add_setting('about_member1_description', array(
        'default'   => 'Visionary leader with a passion for innovation and customer success.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member1_description', array(
        'label'    => __('Member 1 Description', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member1_description',
        'type'     => 'textarea',
    ));

    // About Member 2 Name
    $wp_customize->add_setting('about_member2_name', array(
        'default'   => 'Bob Williams',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member2_name', array(
        'label'    => __('Member 2 Name', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member2_name',
        'type'     => 'text',
    ));

    // About Member 2 Title
    $wp_customize->add_setting('about_member2_title', array(
        'default'   => 'CTO',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member2_title', array(
        'label'    => __('Member 2 Title', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member2_title',
        'type'     => 'text',
    ));

    // About Member 2 Description
    $wp_customize->add_setting('about_member2_description', array(
        'default'   => 'Technology expert driving our cutting-edge solutions and digital transformations.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('about_member2_description', array(
        'label'    => __('Member 2 Description', 'irismorphe'),
        'section'  => 'about_page_section',
        'settings' => 'about_member2_description',
        'type'     => 'textarea',
    ));

    // Services Page Section
    $wp_customize->add_section('services_page_section', array(
        'title'    => __('Services Page Settings', 'irismorphe'),
        'priority' => 32,
    ));

    // Services Page Title
    $wp_customize->add_setting('services_page_title', array(
        'default'   => 'Our Services',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('services_page_title', array(
        'label'    => __('Services Page Title', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'services_page_title',
        'type'     => 'text',
    ));

    // Services Page Description
    $wp_customize->add_setting('services_page_description', array(
        'default'   => 'Empowering your business with innovative solutions and expertise.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('services_page_description', array(
        'label'    => __('Services Page Description', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'services_page_description',
        'type'     => 'textarea',
    ));

    // Service 1 Title
    $wp_customize->add_setting('service1_title', array(
        'default'   => 'Web Development',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service1_title', array(
        'label'    => __('Service 1 Title', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service1_title',
        'type'     => 'text',
    ));

    // Service 1 Description
    $wp_customize->add_setting('service1_description', array(
        'default'   => 'We offer custom web development services to meet your business needs.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service1_description', array(
        'label'    => __('Service 1 Description', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service1_description',
        'type'     => 'textarea',
    ));

    // Service 1 Price
    $wp_customize->add_setting('service1_price', array(
        'default'   => '$5,000+',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service1_price', array(
        'label'    => __('Service 1 Price', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service1_price',
        'type'     => 'text',
    ));

    // Service 2 Title
    $wp_customize->add_setting('service2_title', array(
        'default'   => 'Digital Marketing',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service2_title', array(
        'label'    => __('Service 2 Title', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service2_title',
        'type'     => 'text',
    ));

    // Service 2 Description
    $wp_customize->add_setting('service2_description', array(
        'default'   => 'Our digital marketing strategies will help you reach a wider audience.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service2_description', array(
        'label'    => __('Service 2 Description', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service2_description',
        'type'     => 'textarea',
    ));

    // Service 2 Price
    $wp_customize->add_setting('service2_price', array(
        'default'   => '$3,000+',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('service2_price', array(
        'label'    => __('Service 2 Price', 'irismorphe'),
        'section'  => 'services_page_section',
        'settings' => 'service2_price',
        'type'     => 'text',
    ));

    // Work Page Section
    $wp_customize->add_section('work_page_section', array(
        'title'    => __('Work Page Settings', 'irismorphe'),
        'priority' => 33,
    ));

    // Work Page Title
    $wp_customize->add_setting('work_page_title', array(
        'default'   => 'Our Work',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('work_page_title', array(
        'label'    => __('Work Page Title', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'work_page_title',
        'type'     => 'text',
    ));

    // Work Page Description
    $wp_customize->add_setting('work_page_description', array(
        'default'   => 'Showcasing our commitment to excellence and innovation in every project.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('work_page_description', array(
        'label'    => __('Work Page Description', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'work_page_description',
        'type'     => 'textarea',
    ));

    // Project 1 Title
    $wp_customize->add_setting('project1_title', array(
        'default'   => 'Project A - Tech Innovation',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('project1_title', array(
        'label'    => __('Project 1 Title', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'project1_title',
        'type'     => 'text',
    ));

    // Project 1 Description
    $wp_customize->add_setting('project1_description', array(
        'default'   => 'A successful project for a leading tech company, pushing the boundaries of innovation.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('project1_description', array(
        'label'    => __('Project 1 Description', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'project1_description',
        'type'     => 'textarea',
    ));

    // Project 2 Title
    $wp_customize->add_setting('project2_title', array(
        'default'   => 'Project B - Creative Design',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('project2_title', array(
        'label'    => __('Project 2 Title', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'project2_title',
        'type'     => 'text',
    ));

    // Project 2 Description
    $wp_customize->add_setting('project2_description', array(
        'default'   => 'A creative project that exceeded client expectations, delivering a stunning visual experience.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('project2_description', array(
        'label'    => __('Project 2 Description', 'irismorphe'),
        'section'  => 'work_page_section',
        'settings' => 'project2_description',
        'type'     => 'textarea',
    ));

    // Case Studies Page Section
    $wp_customize->add_section('case_studies_page_section', array(
        'title'    => __('Case Studies Page Settings', 'irismorphe'),
        'priority' => 34,
    ));

    // Case Studies Page Title
    $wp_customize->add_setting('case_studies_page_title', array(
        'default'   => 'Case Studies',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_studies_page_title', array(
        'label'    => __('Case Studies Page Title', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_studies_page_title',
        'type'     => 'text',
    ));

    // Case Studies Page Description
    $wp_customize->add_setting('case_studies_page_description', array(
        'default'   => 'Discover how we\'ve helped our clients achieve their goals with our expertise and innovative solutions.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_studies_page_description', array(
        'label'    => __('Case Studies Page Description', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_studies_page_description',
        'type'     => 'textarea',
    ));

    // Case Study 1 Title
    $wp_customize->add_setting('case_study1_title', array(
        'default'   => 'Client A - Digital Transformation',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study1_title', array(
        'label'    => __('Case Study 1 Title', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study1_title',
        'type'     => 'text',
    ));

    // Case Study 1 Description
    $wp_customize->add_setting('case_study1_description', array(
        'default'   => 'How we helped Client A transform their business with our digital solutions, achieving remarkable growth.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study1_description', array(
        'label'    => __('Case Study 1 Description', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study1_description',
        'type'     => 'textarea',
    ));

    // Case Study 1 Industry
    $wp_customize->add_setting('case_study1_industry', array(
        'default'   => 'Healthcare',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study1_industry', array(
        'label'    => __('Case Study 1 Industry', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study1_industry',
        'type'     => 'text',
    ));

    // Case Study 2 Title
    $wp_customize->add_setting('case_study2_title', array(
        'default'   => 'Client B - Marketing Campaign',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study2_title', array(
        'label'    => __('Case Study 2 Title', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study2_title',
        'type'     => 'text',
    ));

    // Case Study 2 Description
    $wp_customize->add_setting('case_study2_description', array(
        'default'   => 'Our successful marketing campaign for Client B increased their sales by 50%, setting new industry benchmarks.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study2_description', array(
        'label'    => __('Case Study 2 Description', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study2_description',
        'type'     => 'textarea',
    ));

    // Case Study 2 Industry
    $wp_customize->add_setting('case_study2_industry', array(
        'default'   => 'Retail',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('case_study2_industry', array(
        'label'    => __('Case Study 2 Industry', 'irismorphe'),
        'section'  => 'case_studies_page_section',
        'settings' => 'case_study2_industry',
        'type'     => 'text',
    ));

    // Blog Page Section
    $wp_customize->add_section('blog_page_section', array(
        'title'    => __('Blog Page Settings', 'irismorphe'),
        'priority' => 35,
    ));

    // Blog Page Title
    $wp_customize->add_setting('blog_page_title', array(
        'default'   => 'Blog',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_page_title', array(
        'label'    => __('Blog Page Title', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_page_title',
        'type'     => 'text',
    ));

    // Blog Page Description
    $wp_customize->add_setting('blog_page_description', array(
        'default'   => 'Stay informed with our latest insights and news on digital innovation and marketing strategies.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_page_description', array(
        'label'    => __('Blog Page Description', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_page_description',
        'type'     => 'textarea',
    ));

    // Blog Post 1 Title
    $wp_customize->add_setting('blog_post1_title', array(
        'default'   => 'The Future of AI in Marketing',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_post1_title', array(
        'label'    => __('Post 1 Title', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_post1_title',
        'type'     => 'text',
    ));

    // Blog Post 1 Description
    $wp_customize->add_setting('blog_post1_description', array(
        'default'   => 'Explore how artificial intelligence is revolutionizing marketing strategies, unlocking new potentials.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_post1_description', array(
        'label'    => __('Post 1 Description', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_post1_description',
        'type'     => 'textarea',
    ));

    // Blog Post 2 Title
    $wp_customize->add_setting('blog_post2_title', array(
        'default'   => 'Effective SEO Strategies for 2024',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_post2_title', array(
        'label'    => __('Post 2 Title', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_post2_title',
        'type'     => 'text',
    ));

    // Blog Post 2 Description
    $wp_customize->add_setting('blog_post2_description', array(
        'default'   => 'Learn the latest search engine optimization techniques to boost your online presence and reach a wider audience.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('blog_post2_description', array(
        'label'    => __('Post 2 Description', 'irismorphe'),
        'section'  => 'blog_page_section',
        'settings' => 'blog_post2_description',
        'type'     => 'textarea',
    ));

    // Careers Page Section
    $wp_customize->add_section('careers_page_section', array(
        'title'    => __('Careers Page Settings', 'irismorphe'),
        'priority' => 36,
    ));

    // Careers Page Title
    $wp_customize->add_setting('careers_page_title', array(
        'default'   => 'Careers',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('careers_page_title', array(
        'label'    => __('Careers Page Title', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'careers_page_title',
        'type'     => 'text',
    ));

    // Careers Page Description
    $wp_customize->add_setting('careers_page_description', array(
        'default'   => 'Join our team and help us build the future with your talent and passion.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('careers_page_description', array(
        'label'    => __('Careers Page Description', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'careers_page_description',
        'type'     => 'textarea',
    ));

    // Job 1 Title
    $wp_customize->add_setting('job1_title', array(
        'default'   => 'Senior Software Engineer',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job1_title', array(
        'label'    => __('Job 1 Title', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job1_title',
        'type'     => 'text',
    ));

    // Job 1 Description
    $wp_customize->add_setting('job1_description', array(
        'default'   => 'Join our engineering team to build innovative software solutions that shape the future of technology.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job1_description', array(
        'label'    => __('Job 1 Description', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job1_description',
        'type'     => 'textarea',
    ));

    // Job 1 Location
    $wp_customize->add_setting('job1_location', array(
        'default'   => 'San Francisco, CA',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job1_location', array(
        'label'    => __('Job 1 Location', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job1_location',
        'type'     => 'text',
    ));

    // Job 2 Title
    $wp_customize->add_setting('job2_title', array(
        'default'   => 'Marketing Manager',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job2_title', array(
        'label'    => __('Job 2 Title', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job2_title',
        'type'     => 'text',
    ));

    // Job 2 Description
    $wp_customize->add_setting('job2_description', array(
        'default'   => 'Lead our marketing efforts and drive growth with creative and strategic campaigns that resonate with our audience.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job2_description', array(
        'label'    => __('Job 2 Description', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job2_description',
        'type'     => 'textarea',
    ));

    // Job 2 Location
    $wp_customize->add_setting('job2_location', array(
        'default'   => 'New York, NY',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('job2_location', array(
        'label'    => __('Job 2 Location', 'irismorphe'),
        'section'  => 'careers_page_section',
        'settings' => 'job2_location',
        'type'     => 'text',
    ));

    // Contact Page Section
    $wp_customize->add_section('contact_page_section', array(
        'title'    => __('Contact Page Settings', 'irismorphe'),
        'priority' => 37,
    ));

    // Contact Page Title
    $wp_customize->add_setting('contact_page_title', array(
        'default'   => 'Contact Us',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('contact_page_title', array(
        'label'    => __('Contact Page Title', 'irismorphe'),
        'section'  => 'contact_page_section',
        'settings' => 'contact_page_title',
        'type'     => 'text',
    ));

    // Contact Page Description
    $wp_customize->add_setting('contact_page_description', array(
        'default'   => 'We\'d love to hear from you. Send us a message using the form below.',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('contact_page_description', array(
        'label'    => __('Contact Page Description', 'irismorphe'),
        'section'  => 'contact_page_section',
        'settings' => 'contact_page_description',
        'type'     => 'textarea',
    ));
}

add_action('customize_register', 'irismorphe_customize_register');
