<template>
    <div id="wrapper" class="wrapper">
        <!-- Navigation -->
        <nav class="navbar navbar-fixed-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <i class="material-icons">apps</i>
                </button>
                <a class="navbar-brand" href="index.html">
                    <img class="main-logo" src="/static/images/light-logo.png" alt="">
                    <!--<span>AdminPage</span>-->
                </a>
            </div>
            <div class="nav-container">
                <!-- /.navbar-header -->
                <ul class="nav navbar-nav hidden-xs">
                    <li><a id="fullscreen" href="#"><i class="material-icons">fullscreen</i> </a></li>
                    <!-- /.Fullscreen -->
                    <li class="hidden-xs">
                        <a class="search-trigger" href="#">
                            <i class="material-icons">search</i>
                        </a>
                        <div class="fullscreen-search-overlay" id="search-overlay">
                            <a href="#" class="fullscreen-close" id="fullscreen-close-button"><i class="ti-close"></i></a>
                            <div id="fullscreen-search-wrapper">
                                <form method="get" id="fullscreen-searchform" action="" style="top: 655px;">
                                    <input type="text" value="" placeholder="Type keyword(s) here" id="fullscreen-search-input">
                                    <i class="ti-search fullscreen-search-icon"><input value="" type="submit"></i>
                                </form>
                            </div>
                        </div>
                    </li>
                    <!-- /.Full page search -->
                    <li><a id="menu-toggle" href="#"><i class="material-icons">apps</i></a></li>
                    <!-- /.Sidebar menu toggle icon -->
                    <!--Start dropdown menu-->
                    <li class="dropdown hidden-sm"><a href="#" class="dropdown-toggle material-ripple" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <!--<li class="ui_popover_tooltip"></li>-->
                            <li><a href="#">Dropdown Link 1</a></li>
                            <li><a href="#">Dropdown Link 2</a></li>
                            <li><a href="#">Dropdown Link 3</a></li>
                            <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown Link 4</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Submenu Link 4.1</a></li>
                                    <li><a href="#">Submenu Link 4.2</a></li>
                                    <li><a href="#">Submenu Link 4.3</a></li>
                                    <li><a href="#">Submenu Link 4.4</a></li>
                                </ul>
                            </li>
                            <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown Link 5</a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Submenu Link 5.1</a></li>
                                    <li><a href="#">Submenu Link 5.2</a></li>
                                    <li><a href="#">Submenu Link 5.3</a></li>
                                    <li class="divider"></li>
                                    <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Submenu Link 5.4</a>
                                        <ul class="dropdown-menu">
                                            <li><a href="#">Submenu Link 5.4.1</a></li>
                                            <li><a href="#">Submenu Link 5.4.2</a></li>
                                            <li class="divider"></li>
                                            <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Submenu Link 5.4.3</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Submenu Link 5.4.3.1</a></li>
                                                    <li><a href="#">Submenu Link 5.4.3.2</a></li>
                                                    <li><a href="#">Submenu Link 5.4.3.3</a></li>
                                                    <li><a href="#">Submenu Link 5.4.3.4</a></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown dropdown-submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Submenu Link 5.4.4</a>
                                                <ul class="dropdown-menu">
                                                    <li><a href="#">Submenu Link 5.4.4.1</a></li>
                                                    <li><a href="#">Submenu Link 5.4.4.2</a></li>
                                                    <li><a href="#">Submenu Link 5.4.4.3</a></li>
                                                    <li><a href="#">Submenu Link 5.4.4.4</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <!--End Start dropdown menu-->
                    <!--Start dropdown mega menu-->
                    <li class="dropdown mega-dropdown hidden-sm">
                        <a href="#" class="dropdown-toggle material-ripple" data-toggle="dropdown">功能菜单 <b class="caret"></b></a>
                        <ul class="dropdown-menu mega-dropdown-menu">
                            <li class="row">
                                <div class="col-menu col-md-3">
                                    <ul class="menu-col">
                                        <li><a href="buttons.html"><i class="fa fa-window-minimize"></i>Buttons</a></li>
                                        <li><a href="tabs.html"><i class="fa fa-tablet"></i>Tab</a></li>
                                        <li><a href="notification.html"><i class="fa fa-exclamation-triangle"></i>Notification</a></li>
                                        <li><a href="tree-view.html"><i class="fa fa-tree"></i>Tree View</a></li>
                                        <li><a href="progressbars.html"><i class="fa fa-minus"></i>Progressber</a></li>
                                        <li><a href="list.html"><i class="fa fa-list-ol"></i>List View</a></li>
                                        <li><a href="typography.html"><i class="fa fa-text-width"></i>Typography</a></li>
                                        <li><a href="panels.html"><i class="fa fa-keyboard-o"></i>Panels</a></li>
                                    </ul>
                                </div>
                                <!-- end col-3 -->
                                <div class="col-menu col-md-3">
                                    <ul class="menu-col">
                                        <li><a href="modals.html"><i class="fa fa-file-text-o"></i>Modals</a></li>
                                        <li><a href="icheck_toggle_pagination.html"><i class="fa fa-check-square-o"></i>iCheck, Toggle</a></li>
                                        <li><a href="labels-badges-alerts.html"><i class="fa fa-exclamation"></i>labels, Badges, Alerts</a></li>
                                        <li><a href="charts_flot.html"><i class="fa fa-area-chart"></i>Flot Chart</a></li>


                                        
                                        <li><a href="charts_Js.html"><i class="fa fa-bar-chart"></i>Chart js</a></li>
                                        <li><a href="charts_morris.html"><i class="fa fa-pie-chart"></i>Morris Charts</a></li>
                                        <li><a href="charts_sparkline.html"><i class="fa fa-line-chart"></i>Sparkline Charts</a></li>
                                        <li><a href="maps_data.html"><i class="fa fa-map-marker"></i>Data Maps</a></li>
                                    </ul>
                                </div>
                                <!-- end col-3 -->
                                <div class="col-menu col-md-3">
                                    <ul class="menu-col">
                                        <li><a href="maps_jvector.html"><i class="fa fa-puzzle-piece"></i>Jvector Maps</a></li>
                                        <li><a href="maps_google.html"><i class="fa fa-google"></i>Google map</a></li>
                                        <li><a href="maps_snazzy.html"><i class="fa fa-map-signs"></i>Snazzy Map</a></li>
                                        <li><a href="widgets.html">
                                            <i class="fa fa-windows"></i> <span>Widgets</span>
                                            <span class="pull-rightr">
                                                        <small class="label pull-right bg-green">new</small>
                                                    </span>
                                        </a>
                                        </li>
                                        <li><a href="table.html"><i class="fa fa-table"></i>Simple tables</a></li>
                                        <li><a href="dataTables.html"><i class="ti-layout-tab-window"></i>Data tables</a></li>
                                        <li><a href="footable.html"><i class="ti-layout-width-default"></i>FooTable</a></li>
                                        <li><a href="x-editable.html"><i class="ti-close"></i>X-editable</a></li>
                                    </ul>
                                </div>
                                <div class="col-menu col-md-3">
                                    <ul class="menu-col">
                                        <li><a href="icons_bootstrap.html"><i class="fa fa-bold"></i>Bootstrap Icons</a></li>
                                        <li><a href="icons_fontawesome.html"><i class="fa fa-fort-awesome"></i>Fontawesome Icon</a></li>
                                        <li><a href="icons_flag.html"><i class="fa fa-flag-checkered"></i>Flag Icons</a></li>
                                        <li><a href="icons_material.html"><i class="fa fa-meetup"></i>Material Icons</a></li>
                                        <li><a href="icons_weather.html"><i class="fa fa-bolt"></i>Weather Icons </a></li>
                                        <li><a href="icons_line.html"><i class="fa fa-lemon-o"></i>Line Icons</a></li>
                                        <li><a href="icons_pe.html"><i class="fa fa-diamond"></i>Pe Icons</a></li>
                                        <li><a href="icon_socicon.html"><i class="fa fa-share-alt"></i>Socicon Icons</a></li>
                                    </ul>
                                </div>
                                <!-- end col-3 -->
                                <div class="col-menu col-md-3">
                                    <ul class="menu-col">
                                        <li><a href="invoice.html"><i class="fa fa-file-text-o"></i>Invoice</a></li>
                                        <li><a href="timeline.html"><i class="fa fa-hourglass-o"></i>Vertical timeline</a></li>
                                        <li><a href="horizontal_timeline.html"><i class="fa fa-hourglass-end"></i>Horizontal timeline</a></li>
                                        <li><a href="pricing.html"><i class="fa fa-usd"></i>Pricing Table</a></li>
                                        <li><a href="slider.html"><i class="fa fa-sliders"></i>Slider</a></li>
                                        <li><a href="carousel.html"><i class="fa fa-long-arrow-left"></i>Carousel</a></li>
                                        <li><a href="code_editor.html"><i class="fa fa-code"></i>Code editor</a></li>
                                        <li>
                                            <a href="calender.html">
                                                <i class="ti-calendar"></i><span>Calendar</span>
                                                <span class="pull-right">
                                                        <small class="label pull-right bg-red m-r-5">9</small>
                                                        <small class="label pull-right bg-yellow m-r-5">29</small>
                                                    </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div><!-- end col-3 -->
                            </li><!-- end row -->
                        </ul>
                    </li>
                    <!--End dropdown mega menu-->
                    <li><a href="https://themeforest.net/item/adminpage-responsive-bootstrap-admin-template-dashboard/20281702?s_rank=5" target="_blank" class="btn-buy hidden-xs hidden-sm hidden-md">Buy now $25</a></li>
                </ul>
                <ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="material-icons">chat</i>
                            <span class="label label-danger">9</span>
                        </a>
                        <ul class="dropdown-menu dropdown-messages">
                            <li class="rad-dropmenu-header"><a href="#">New Messages</a></li>
                            <li>
                                <a href="#" class="rad-content">
                                    <div class="inbox-item">
                                        <div class="inbox-item-img"><img src="assets/style/ui/images/avatar.png" class="img-circle" alt=""></div>
                                        <strong class="inbox-item-author">Naeem Khan</strong>
                                        <span class="inbox-item-date">-13:40 PM</span>
                                        <p class="inbox-item-text">Hey! there I'm available...</p>
                                        <span class="profile-status available pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="rad-content">
                                    <div class="inbox-item">
                                        <div class="inbox-item-img"><img src="assets/style/ui/images/avatar2.png" class="img-circle" alt=""></div>
                                        <strong class="inbox-item-author">Sala Uddin</strong>
                                        <span class="inbox-item-date">-13:40 PM</span>
                                        <p class="inbox-item-text">Hey! there I'm available...</p>
                                        <span class="profile-status away pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="rad-content">
                                    <div class="inbox-item">
                                        <div class="inbox-item-img"><img src="assets/style/ui/images/avatar3.png" class="img-circle" alt=""></div>
                                        <strong class="inbox-item-author">Mozammel</strong>
                                        <span class="inbox-item-date">-13:40 PM</span>
                                        <p class="inbox-item-text">Hey! there I'm available...</p>
                                        <span class="profile-status busy pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="rad-content">
                                    <div class="inbox-item">
                                        <div class="inbox-item-img"><img src="assets/style/ui/images/avatar4.png" class="img-circle" alt=""></div>
                                        <strong class="inbox-item-author">Tanzil Ahmed</strong>
                                        <span class="inbox-item-date">-13:40 PM</span>
                                        <p class="inbox-item-text">Hey! there I'm available...</p>
                                        <span class="profile-status offline pull-right"></span>
                                    </div>
                                </a>
                            </li>
                            <li class="rad-dropmenu-footer"><a href="#">View All messages</a></li>
                        </ul> <!-- /.Dropdown-messages -->
                    </li><!-- /.dropdown -->
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <!--<i class="ti-flag-alt"></i>-->
                            <i class="material-icons">flag</i>
                            <span class="label label-success">4</span>
                            <!--<i class="ti-angle-down"></i>-->
                        </a>
                        <ul class="dropdown-menu dropdown-tasks">
                            <!--<li class="ui_popover_tooltip"></li>-->
                            <li class="rad-dropmenu-header"><a href="#">Your Task</a></li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 1</strong>
                                            <span class="pull-right sm-text">40% Complete</span></p>
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
                                                <span class="sr-only">40% Complete (success)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 2</strong>
                                            <span class="pull-right sm-text">20% Complete</span></p>
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
                                                <span class="sr-only">20% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 3</strong>
                                            <span class="pull-right sm-text">60% Complete</span></p>
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
                                                <span class="sr-only">60% Complete (warning)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div>
                                        <p><strong>Task 4</strong>
                                            <span class="pull-right sm-text">80% Complete</span></p>
                                        <div class="progress progress-striped active">
                                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%">
                                                <span class="sr-only">80% Complete (danger)</span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="rad-dropmenu-footer"><a href="#">See All Tasks</a></li>
                        </ul><!-- /.Dropdown-tasks -->
                    </li><!-- /.Dropdown -->
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="material-icons">add_alert</i>
                            <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            <!--<i class="ti-announcement"></i>-->
                            <!--<i class="ti-angle-down"></i>-->
                        </a>
                        <ul class="dropdown-menu dropdown-alerts">
                            <!--<li class="ui_popover_tooltip"></li>-->
                            <li class="rad-dropmenu-header"><a href="#">Your Notifications</a></li>
                            <li>
                                <a class="rad-content" href="#">
                                    <div class="pull-left"><i class="fa fa-html5 fa-2x color-red"></i>
                                    </div>
                                    <div class="rad-notification-body">
                                        <div class="lg-text">Introduction to fetch()</div>
                                        <div class="sm-text">The fetch API</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="rad-content" href="#">
                                    <div class="pull-left"><i class="fa fa-bitbucket fa-2x color-violet"></i>
                                    </div>
                                    <div class="rad-notification-body">
                                        <div class="lg-text">Check your BitBucket</div>
                                        <div class="sm-text">Last Chance</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="rad-content" href="#">
                                    <div class="pull-left"><i class="fa fa-google fa-2x color-info"></i>
                                    </div>
                                    <div class="rad-notification-body">
                                        <div class="lg-text">Google Account</div>
                                        <div class="sm-text">example@gmail.com</div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="rad-content" href="#">
                                    <div class="pull-left"><i class="fa fa-amazon fa-2x color-green"></i>
                                    </div>
                                    <div class="rad-notification-body">
                                        <div class="lg-text">Amazon Simple Notification ...</div>
                                        <div class="sm-text">Lorem Ipsum is simply dummy text...</div>
                                    </div>
                                </a>
                            </li>
                            <li class="rad-dropmenu-footer"><a href="#">See all notifications</a></li>
                        </ul>  <!-- /.dropdown-alerts -->
                        <!-- /.dropdown-alerts -->
                    </li>
                    <!-- /.Dropdown -->
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="material-icons">person_add</i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="profile.html"><i class="ti-user"></i>&nbsp; Profile</a></li>
                            <li><a href="mailbox.html"><i class="ti-email"></i>&nbsp; My Messages</a></li>
                            <li><a href="lockscreen.html"><i class="ti-lock"></i>&nbsp; Lock Screen</a></li>
                            <li><a href="#"><i class="ti-settings"></i>&nbsp; Settings</a></li>
                            <li><a href="login.html"><i class="ti-layout-sidebar-left"></i>&nbsp; Logout</a></li>
                        </ul><!-- /.dropdown-user -->
                    </li><!-- /.Dropdown -->
                    <li class="log_out">
                        <a href="login.html">
                            <i class="material-icons">power_settings_new</i>
                        </a>
                    </li><!-- /.Log out -->
                </ul> <!-- /.navbar-top-links -->
            </div>
        </nav>
        <!-- /.Navigation -->
        <div class="sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse">
                <ul class="nav" id="side-menu">
                    <li class="nav-heading "> <span>Main Navigation&nbsp;&nbsp;&nbsp;&nbsp;------</span></li>
                    <li><a href="index.html" class="material-ripple"><i class="material-icons">home</i> Dashboard</a></li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">bubble_chart</i> Charts<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="charts_flot.html">Flot Chart</a></li>
                            <li><a href="charts_Js.html">Chart js</a></li>
                            <li><a href="charts_morris.html">Morris Charts</a></li>
                            <li><a href="charts_sparkline.html">Sparkline Charts</a></li>
                            <li><a href="charts_am.html">Am Charts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">drafts</i> Mailbox<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="mailbox.html">Mailbox<span class="nav-tag green">3</span></a></li>
                            <li><a href="mailDetails.html">Mailbox Details<span class="nav-tag yellow">2</span></a></li>
                            <li><a href="compose.html">Compose<span class="nav-tag red">9</span></a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">business</i> Tables<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="table.html">Simple tables</a></li>
                            <li><a href="dataTables.html">Data tables</a></li>
                            <li><a href="footable.html">FooTable</a></li>
                            <li><a href="x-editable.html">X-editable</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">assignment</i> Forms<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="forms_basic.html">Basic Forms</a></li>
                            <li><a href="form_input_group.html">Input group</a></li>
                            <li><a href="form-mask.html">Form Mask</a></li>
                            <li><a href="form_touchspin.html">Touchspin</a></li>
                            <li><a href="form_select.html">Select</a></li>
                            <li><a href="forms_validation.html">Validation Forms</a></li>
                            <li><a href="forms_cropper.html">Cropper</a></li>
                            <li><a href="form_file_upload.html">Forms File Upload</a></li>
                            <li><a href="forms_editor_ck.html">CK Editor</a></li>
                            <li><a href="forms_editor_summernote.html">Summernote</a></li>
                            <li><a href="form_wizard.html">Form Wizaed</a></li>
                            <li><a href="forms_editor_markdown.html">Markdown</a></li>
                            <li><a href="forms_editor_trumbowyg.html">Trumbowyg</a></li>
                            <li><a href="form_editor_wysihtml5.html">Wysihtml5</a></li>
                        </ul>
                    </li>
                    <li class="nav-heading "> <span>Components&nbsp;&nbsp;&nbsp;&nbsp;------</span></li>
                    <li class="active">
                        <a href="#" class="material-ripple"><i class="material-icons">format_color_fill</i> UI Elements<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse in" aria-expanded="true">
                            <li><a href="buttons.html">Buttons</a></li>
                            <li><a href="tabs.html">Tab</a></li>
                            <li><a href="notification.html">Notification</a></li>
                            <li><a href="tree-view.html">Tree View</a></li>
                            <li><a href="progressbars.html">Progressber</a></li>
                            <li><a href="list.html">List View</a></li>
                            <li><a href="typography.html">Typography</a></li>
                            <li><a href="panels.html">Panels</a></li>
                            <li><a href="modals.html">Modals</a></li>
                            <li><a href="icheck_toggle_pagination.html">iCheck, Toggle, pagination</a></li>
                            <li class="active"><a href="labels-badges-alerts.html">labels, Badges, Alerts</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">map</i> Maps<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="maps_amcharts.html">Amcharts Map</a></li>
                            <li><a href="maps_gmaps.html">gMaps</a></li>
                            <li><a href="maps_data.html">Data Maps</a></li>
                            <li><a href="maps_jvector.html">Jvector Maps</a></li>
                            <li><a href="maps_google.html">Google map</a></li>
                            <li><a href="maps_snazzy.html">Snazzy Map</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">insert_emoticon</i> Icons<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="icons_bootstrap.html">Bootstrap Icons</a></li>
                            <li><a href="icons_fontawesome.html">Fontawesome Icon</a></li>
                            <li><a href="icons_flag.html">Flag Icons</a></li>
                            <li><a href="icons_material.html">Material Icons</a></li>
                            <li><a href="icons_weather.html">Weather Icons </a></li>
                            <li><a href="icons_line.html">Line Icons</a></li>
                            <li><a href="icons_pe.html">Pe Icons</a></li>
                            <li><a href="icon_socicon.html">Socicon Icons</a></li>
                        </ul>
                    </li>
                    <li><a href="widgets.html"><i class="material-icons">widgets</i>Widgets<span class="nav-tag green">new</span></a></li>
                    <li><a href="calender.html"><i class="material-icons">perm_contact_calendar</i>Calendar<span class="nav-tag red">3</span><span class="nav-tag green">5</span><span class="nav-tag yellow">8</span></a></li>
                    <li class="nav-heading "> <span>Extra&nbsp;&nbsp;&nbsp;&nbsp;------</span></li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">stay_current_portrait</i>App Views<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="invoice.html">Invoice</a></li>
                            <li><a href="timeline.html">Vertical timeline</a></li>
                            <li><a href="horizontal_timeline.html">Horizontal timeline</a></li>
                            <li><a href="pricing.html">Pricing Table</a></li>
                            <li><a href="slider.html">Slider</a></li>
                            <li><a href="carousel.html">Carousel</a></li>
                            <li><a href="code_editor.html">Code editor</a></li>
                            <li><a href="gridSystem.html">Grid System</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">devices_other</i>Other pags<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li><a href="login.html">Login</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="profile.html">Profile</a></li>
                            <li><a href="forget_password.html">Forget password</a></li>
                            <li><a href="lockscreen.html">Lockscreen</a></li>
                            <li><a href="404.html">404 Error</a></li>
                            <li><a href="505.html">505 Error</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="material-ripple"><i class="material-icons">invert_colors</i> Multi-Level Dropdown<span class="fa arrow"></span></a>
                        <ul class="nav nav-second-level collapse" aria-expanded="false">
                            <li> <a href="#">Second Level Item</a></li>
                            <li><a href="#">Second Level Item</a></li>
                            <li>
                                <a href="#">Third Level <span class="fa arrow"></span></a>
                                <ul class="nav nav-third-level collapse" aria-expanded="false">
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                    <li><a href="#">Third Level Item</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="blank.html" class="material-ripple"><i class="material-icons">check_box_outline_blank</i> Blank page</a></li>
                    <li><a href="../../documentation/index.html" class="material-ripple" target="_blank"><i class="material-icons">bookmark</i> Documentation</a></li>
                </ul>
            </div>
            <!-- /.sidebar-collapse -->
        </div>
        <!-- /.Left Sidebar-->
        <div class="side-bar right-bar">
            <div class="">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs right-sidebar-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab"><i class="material-icons">home</i></a></li>
                    <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab"><i class="material-icons">person_add</i></a></li>
                    <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab"><i class="material-icons">chat</i></a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade  in active" id="home">
                        <ul id="styleOptions" title="switch styling">
                            <li><b>Dark Skin</b></li>
                            <li><a href="javascript: void(0)" data-theme="skin-blue.min"><img src="assets/dist/img/theme-color/1.jpg" alt=""></a></li>
                            <li><a href="javascript: void(0)" data-theme="skin-dark.min"><img src="assets/dist/img/theme-color/2.jpg" alt=""></a></li>
                            <li><a href="javascript: void(0)" data-theme="skin-red-light.min" class="skin-logo"><img src="assets/dist/img/theme-color/5.jpg" alt=""></a></li>
                            <li><b>Dark Skin sidebar</b></li>
                            <li><a href="javascript: void(0)" data-theme="skin-default.min"><img src="assets/dist/img/theme-color/7.jpg" alt=""> </a></li>
                            <li><a href="javascript: void(0)" data-theme="skin-red-dark.min"><img src="assets/dist/img/theme-color/6.jpg" alt=""></a></li>
                            <li><a href="javascript: void(0)" data-theme="skin-dark-1.min"><img src="assets/dist/img/theme-color/8.jpg" alt=""></a></li>
                            <li><b>Light Skin sidebar</b></li>
                            <li><a href="javascript: void(0)" data-theme="skin-default-light.min" class="skin-logo"><img src="assets/dist/img/theme-color/3.jpg" alt=""></a></li>
                            <li><a href="javascript: void(0)" data-theme="skin-white.min"><img src="assets/dist/img/theme-color/4.jpg" alt=""></a> </li>
                        </ul>
                    </div>
                    <div role="tabpanel" class="tab-pane fade " id="profile">
                        <h3 class="sidebar-heading">Activity</h3>
                        <div class="rad-activity-body">
                            <div class="rad-list-group group">
                                <a href="#" class="rad-list-group-item">
                                    <div class="rad-list-icon bg-red pull-left"><i class="fa fa-phone"></i></div>
                                    <div class="rad-list-content"><strong>Client meeting</strong>
                                        <div class="md-text">Meeting at 10:00 AM</div>
                                    </div>
                                </a>
                                <a href="#" class="rad-list-group-item">
                                    <div class="rad-list-icon bg-yellow pull-left"><i class="fa fa-refresh"></i></div>
                                    <div class="rad-list-content"><strong>Created ticket</strong>
                                        <div class="md-text">Ticket assigned to Dev team</div>
                                    </div>
                                </a>
                                <a href="#" class="rad-list-group-item">
                                    <div class="rad-list-icon bg-primary pull-left"><i class="fa fa-check"></i></div>
                                    <div class="rad-list-content"><strong>Activity completed</strong>
                                        <div class="md-text">Completed the dashboard html</div>
                                    </div>
                                </a>
                                <a href="#" class="rad-list-group-item">
                                    <div class="rad-list-icon bg-green pull-left"><i class="fa fa-envelope"></i></div>
                                    <div class="rad-list-content"><strong>New Invitation</strong>
                                        <div class="md-text">Max has invited you to join Inbox</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <!-- /.sidebar-menu -->
                        <h3 class="sidebar-heading">Tasks Progress</h3>
                        <ul class="sidebar-menu">
                            <li>
                                <a href="#">
                                    <h4 class="subheading">
                                        Task one
                                        <span class="label label-danger pull-right">40%</span>
                                    </h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-danger progress-bar-striped active" style="width: 40%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h4 class="subheading">
                                        Task two
                                        <span class="label label-success pull-right">20%</span>
                                    </h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-success progress-bar-striped active" style="width: 20%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h4 class="subheading">
                                        Task Three
                                        <span class="label label-warning pull-right">60%</span>
                                    </h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 60%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <h4 class="subheading">
                                        Task four
                                        <span class="label label-primary pull-right">80%</span>
                                    </h4>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-primary progress-bar-striped active" style="width: 80%"></div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <!-- /.sidebar-menu -->
                    </div>
                    <div role="tabpanel" class="tab-pane fade " id="messages">
                        <div class="message_widgets">
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Naeem Khan</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status available pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar2.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Sala Uddin</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status away pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar3.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Mozammel</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status busy pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar4.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Tanzil</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status offline pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar5.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Amir Khan</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status available pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Salman Khan</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status available pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Tahamina</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status available pull-right"></span>
                                </div>
                            </a>
                            <a href="#">
                                <div class="inbox-item">
                                    <div class="inbox-item-img"><img src="assets/dist/img/avatar4.png" class="img-circle" alt=""></div>
                                    <strong class="inbox-item-author">Jhon</strong>
                                    <span class="inbox-item-date">-13:40 PM</span>
                                    <p class="inbox-item-text">Hey! there I'm available...</p>
                                    <span class="profile-status offline pull-right"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.Right Sidebar -->
        <!-- /.Navbar  Static Side -->
        <div class="control-sidebar-bg"></div>
        <!-- Page Content -->
        <div id="page-wrapper" style="min-height: 1239px;">
            <!-- main content -->
            <router-view />
            <div class="content">
                <!-- Content Header (Page header) -->
                <div class="content-header">
                    <div class="header-icon">
                        <i class="pe-7s-note2"></i>
                    </div>
                    <div class="header-title">
                        <h1>Label, Badges, Alerts</h1>
                        <small>Tabs styles and versions</small>
                        <ol class="breadcrumb">
                            <li><a href="index.html"><i class="pe-7s-home"></i> Home</a></li>
                            <li><a href="#">UI Elements</a></li>
                            <li class="active">Label, Badges, Alerts</li>
                        </ol>
                    </div>
                </div> <!-- /. Content Header (Page header) -->
                <div class="row">
                    <div class="col-sm-12 lobipanel-parent-sortable ui-sortable" data-lobipanel-child-inner-id="Yp8BbMu0F1">
                        <div class="panel panel-bd lobidrag lobipanel lobipanel-sortable" data-inner-id="Yp8BbMu0F1" data-index="0">
                            <div class="panel-heading ui-sortable-handle">
                                <div class="panel-title" style="max-width: calc(100% - 180px);">
                                    <h4>Label, Badges, Alerts</h4>
                                </div>
                                <div class="dropdown"><ul class="dropdown-menu dropdown-menu-right"><li><a data-func="editTitle" data-tooltip="Edit title" data-toggle="tooltip" data-title="Edit title" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-pencil"></i><span class="control-title">Edit title</span></a></li><li><a data-func="unpin" data-tooltip="Unpin" data-toggle="tooltip" data-title="Unpin" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-move"></i><span class="control-title">Unpin</span></a></li><li><a data-func="reload" data-tooltip="Reload" data-toggle="tooltip" data-title="Reload" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-reload"></i><span class="control-title">Reload</span></a></li><li><a data-func="minimize" data-tooltip="Minimize" data-toggle="tooltip" data-title="Minimize" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-minus"></i><span class="control-title">Minimize</span></a></li><li><a data-func="expand" data-tooltip="Fullscreen" data-toggle="tooltip" data-title="Fullscreen" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-fullscreen"></i><span class="control-title">Fullscreen</span></a></li><li><a data-func="close" data-tooltip="Close" data-toggle="tooltip" data-title="Close" data-placement="bottom" data-original-title="" title=""><i class="panel-control-icon ti-close"></i><span class="control-title">Close</span></a></li></ul><div class="dropdown-toggle" data-toggle="dropdown"><span class="panel-control-icon glyphicon glyphicon-cog"></span></div></div></div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-6">
                                        <h4 class="m-t-0 m-b-20">Labels</h4>
                                        <!-- default labels -->
                                        <span class="label label-default-outline m-r-15">Default</span>
                                        <span class="label label-primary-outline m-r-15">Primary</span>
                                        <span class="label label-success-outline m-r-15">Success</span>
                                        <span class="label label-info-outline m-r-15">Info</span>
                                        <span class="label label-warning-outline m-r-15">Warning</span>
                                        <span class="label label-danger-outline m-r-15">Danger</span>
                                        <!-- / default labels -->
                                        <div class="space-25">&nbsp;</div>
                                        <!-- default filled labels -->
                                        <span class="label label-default m-r-15">Default</span>
                                        <span class="label label-primary m-r-15">Primary</span>
                                        <span class="label label-success m-r-15">Success</span>
                                        <span class="label label-info m-r-15">Info</span>
                                        <span class="label label-warning m-r-15">Warning</span>
                                        <span class="label label-danger m-r-15">Danger</span>
                                        <!-- / default filled labels -->
                                        <div class="space-25">&nbsp;</div>
                                        <!-- pill labels -->
                                        <span class="label label-pill label-default-outline m-r-15">Default</span>
                                        <span class="label label-pill label-primary-outline m-r-15">Primary</span>
                                        <span class="label label-pill label-success-outline m-r-15">Success</span>
                                        <span class="label label-pill label-info-outline m-r-15">Info</span>
                                        <span class="label label-pill label-warning-outline m-r-15">Warning</span>
                                        <span class="label label-pill label-danger-outline m-r-15">Danger</span>
                                        <!-- / pill labels -->
                                        <div class="space-25">&nbsp;</div>
                                        <!-- pill filled labels -->
                                        <span class="label label-pill label-default m-r-15">Default</span>
                                        <span class="label label-pill label-primary m-r-15">Primary</span>
                                        <span class="label label-pill label-success m-r-15">Success</span>
                                        <span class="label label-pill label-info m-r-15">Info</span>
                                        <span class="label label-pill label-warning m-r-15">Warning</span>
                                        <span class="label label-pill label-danger m-r-15">Danger</span>
                                        <!-- /pill filled labels -->
                                        <div class="space-25">&nbsp;</div>
                                        <!-- badges -->
                                        <h4 class="m-t-0 m-b-20">Badges</h4>
                                        <div class="badge-inner">
                                            <a href="#" class="m-r-15">Home <span class="badge">12</span></a>
                                            <a href="#" class="m-r-15">Profile</a>
                                            <a href="#" class="m-r-15">Messages <span class="badge">7</span></a>
                                        </div>
                                        <div class="space-25">&nbsp;</div>
                                        <ul class="nav nav-pills" role="tablist">
                                            <li role="presentation" class="active"><a href="#">Home <span class="badge">12</span></a></li>
                                            <li role="presentation"><a href="#">Profile</a></li>
                                            <li role="presentation"><a href="#">Messages <span class="badge">7</span></a></li>
                                        </ul>
                                        <!-- / badges -->
                                        <div class="space-25">&nbsp;</div>
                                    </div>
                                    <div class="col-md-6">
                                        <h4 class="m-t-0 m-b-20">Alerts</h4>
                                        <!-- alerts -->
                                        <div class="alert alert-success alert-dismissible" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <strong>Success!</strong> You successfully read this important alert message.
                                        </div>
                                        <div class="alert alert-info alert-dismissible" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <strong>Info!</strong> This alert needs your attention, but it's not important.
                                        </div>
                                        <div class="alert alert-warning alert-dismissible" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <strong>Warning!</strong> Better check yourself, you're not looking too good.
                                        </div>
                                        <div class="alert alert-danger alert-dismissible" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                            <strong>Danger!</strong> Change a few things up and try submitting again.
                                        </div>
                                        <!-- / alerts -->
                                        <!-- alerts with icons -->
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="alert alert-sm alert-success alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                    <i class="fa fa-check"></i><strong>Success!</strong> Some text here...
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="alert alert-sm alert-info alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                    <i class="fa fa-info-circle"></i><strong>Info!</strong> Some text here...
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="alert alert-sm alert-warning alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                    <i class="fa fa-exclamation-triangle"></i><strong>Warning!</strong> Some text here...
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="alert alert-sm alert-danger alert-dismissible" role="alert">
                                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
                                                    <i class="fa fa-exclamation-circle"></i><strong>Danger!</strong> Some text here...
                                                </div>
                                            </div>
                                        </div>
                                        <!-- / alerts with icons -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> <!-- /.main content -->
        </div><!-- /#page-wrapper -->
    </div>
</template>

<script>
    export default {
    }
</script>
