<!doctype html>
<html <?php language_attributes(); ?> class="no-js">
	<head>
		<meta charset="<?php bloginfo('charset'); ?>">
		<title><?php wp_title(''); ?><?php if(wp_title('', false)) { echo ' :'; } ?> <?php bloginfo('name'); ?></title>

		<link href="//www.google-analytics.com" rel="dns-prefetch">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.png" rel="shortcut icon">
        <link href="<?php echo get_template_directory_uri(); ?>/img/icons/favicon.png" rel="apple-touch-icon-precomposed">

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="description" content="<?php bloginfo('description'); ?>">

		<?php wp_head(); ?>
		<script>
        // conditionizr.com
        // configure environment tests
        conditionizr.config({
            assets: '<?php echo get_template_directory_uri(); ?>',
            tests: {}
        });
        </script>

	</head>
	<body <?php body_class(); ?>>

		<!-- wrapper -->
		<div class="wrapper clear">

			<!-- header -->
			<header class="header clear" role="banner">
                <div class="business-info section-top clear">
                    
                	<div class="page-wrapper clear">
                    	<div class="p-l">
                    		<?php dynamic_sidebar('top-l'); ?>
                    	</div>
                    	<div class="p-r">
							<?php dynamic_sidebar('top-r'); ?>
						</div>
						<div class="logo p-c">
							<a href="<?php echo home_url(); ?>">
							<!-- svg logo - toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script -->
							<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="Logo" class="logo-img">
						</a>
                    	</div>
					</div>
						
                	</div>


					<!-- nav -->
					<nav class="nav clear" role="navigation">

              
    					<div class="page-wrapper clear">    
                          <?php  add_custom_nav_menu('menu-1'); ?>
                 		</div>
					</nav>
					<!-- /nav -->
					<section class="banner clear">
					<div class="page-wrapper">
						<div class="banner-txt-1 txt-c">
							<span class="line-1">Radio With A Mission</span><br>
							<span class="line-2"> Interviews • Reviews • Polotics • Arts • Entertainment</span>
						</div>
						<img class="banner-img" src="<?php echo get_template_directory_uri(); ?>/img/banner.png" alt="Wake Up Tucson" />
					</div>
					</section>
      </header>
			<!-- /header -->
