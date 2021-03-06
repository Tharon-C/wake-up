<?php get_header('home'); ?>
<?php /*
Template Name: Home state
*/ ?>

	<main role="main wrapper">
	<section>	
	<div class="page-wrapper clear">	
		<?php dynamic_sidebar('home-1'); ?>
	</div>
	</section>
	<div class="page-wrapper clear">
		<section class="clear col-3-4 p-l">

            <?php if (have_posts()): while (have_posts()) : the_post(); ?>

			<!-- article -->
			<article class="home-content" id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

				<?php the_content(); ?>

				<?php comments_template( '', true ); // Remove if you don't want comments ?>

				<br class="clear">

			</article>
			<!-- /article -->

		<?php endwhile; ?>

		<?php else: ?>

			<!-- article -->
			<article>

				<h2><?php _e( 'Sorry, nothing to display.', 'html5blank' ); ?></h2>

			</article>
			<!-- /article -->

		<?php endif; ?>
		<div class="color-4 marg-s-30px marg-b-30px pad-20px">
			<?php dynamic_sidebar('page-bottom'); ?>
		</div>
		</section>
		
		<aside class="sidebar col-1-4 p-r pad-s-30px">
			<?php dynamic_sidebar('sidebar-1'); ?>
		</aside> 
	</div>

	</main>

<?php get_footer(); ?>
