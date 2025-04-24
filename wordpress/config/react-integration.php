<?php
/**
 * Adds theme customization options to the WordPress admin interface.
 */
function irismorphe_customize_register($wp_customize) {
  //This file used to contain theme customization options.
	//These have been replaced by ACF fields.
}

add_action('customize_register', 'irismorphe_customize_register');
