<html>
<head>
	<meta charset="utf-8">
	<title>Quatro Rodas</title>
    <link rel="stylesheet" type="text/css" href="style-mobile" media="(max-width:320px)" >
    <link rel="stylesheet" type="text/css" href="style-mobile" media="(min-width:321px) and (max-width:960px)" >
    <link rel="stylesheet" type="text/css" href="style.css" media="(min-width:961px)" >
    <script type="text/javascript" src="js/jquery.js" ></script>
    <script type="text/javascript" src="js/script-menu.js"></script>
    <!-- head mega menu -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type='text/javascript' src="http://projetosnaweb.ml/projetos/js/js-menu/jquery.hoverIntent.minified.js"></script>
<script type='text/javascript' src="http://projetosnaweb.ml/projetos/js/js-menu/jquery.megamenu.js"></script>
<script type="text/javascript">
$(document).ready(function($){
	$('#mega-menu-tut').dcMegaMenu({
		rowItems: '3',
		speed: 'fast'
	});
});
</script>
<link href="http://projetosnaweb.ml/projetos/menu.css" rel="stylesheet" type="text/css" />
   <!--final head mega menu -->
<link rel="profile" href="http://gmpg.org/xfn/11" />
<meta http-equiv="Content-Type" content="<?php bloginfo('html_type'); ?>; charset=<?php bloginfo('charset'); ?>" />
<title><?php wp_title(''); ?></title>
<link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />
<?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); wp_head(); ?>
   
    </head>
<body>
<body>
<div id="corpo">
    <div id="header">
        <h1><?php bloginfo('name'); ?></h1>
        <h2><?php bloginfo('description'); ?></h2>
 
        <ul id="nav">
            <?php wp_list_cats('sort_column=name'); ?>
        </ul>
    </div>
<div id="banner-mobile">
<img src="http://projetosnaweb.ml/projetos/img/mobile/banner-mob.jpg" width="300" height="48" />
</div>
<div id="banner-topo">
<img src="http://projetosnaweb.ml/projetos/img/banner-topo.png" width="729" height="91" />
</div>
<div id="menu">