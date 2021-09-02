import React from 'react';
import '../vendor/bootstrap-select/dist/css/bootstrap-select.min.css';
import '../css/style.css';

export default function Header() {
  const NbrNotif=0;
    return (
      
        <div>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous"></link>
            <div className="nav-header">
            <a href="index.html" className="brand-logo">
                <img className="logo-abbr" src="./images/logo.png" alt=""/>
                <img className="logo-compact" src="./images/logo-text.png" alt=""/>
                <img className="brand-title" src="https://cdn.discordapp.com/attachments/475963741616472074/825102252250234890/services.jpg" alt=""/>
            </a>
            <div className="nav-control">
                <div className="hamburger">
                    <span className="line"></span><span className="line"></span><span className="line"></span>
                </div>
            </div>
        </div>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar"> Dashboard </div>
              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link  ai-icon" href="#" role="button" data-toggle="dropdown">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.75 14.8385V12.0463C21.7471 9.88552 20.9385 7.80353 19.4821 6.20735C18.0258 4.61116 16.0264 3.61555 13.875 3.41516V1.625C13.875 1.39294 13.7828 1.17038 13.6187 1.00628C13.4546 0.842187 13.2321 0.75 13 0.75C12.7679 0.75 12.5454 0.842187 12.3813 1.00628C12.2172 1.17038 12.125 1.39294 12.125 1.625V3.41534C9.97361 3.61572 7.97429 4.61131 6.51794 6.20746C5.06159 7.80361 4.25291 9.88555 4.25 12.0463V14.8383C3.26257 15.0412 2.37529 15.5784 1.73774 16.3593C1.10019 17.1401 0.751339 18.1169 0.75 19.125C0.750764 19.821 1.02757 20.4882 1.51969 20.9803C2.01181 21.4724 2.67904 21.7492 3.375 21.75H8.71346C8.91521 22.738 9.45205 23.6259 10.2331 24.2636C11.0142 24.9013 11.9916 25.2497 13 25.2497C14.0084 25.2497 14.9858 24.9013 15.7669 24.2636C16.548 23.6259 17.0848 22.738 17.2865 21.75H22.625C23.321 21.7492 23.9882 21.4724 24.4803 20.9803C24.9724 20.4882 25.2492 19.821 25.25 19.125C25.2486 18.117 24.8998 17.1402 24.2622 16.3594C23.6247 15.5786 22.7374 15.0414 21.75 14.8385ZM6 12.0463C6.00232 10.2113 6.73226 8.45223 8.02974 7.15474C9.32723 5.85726 11.0863 5.12732 12.9212 5.125H13.0788C14.9137 5.12732 16.6728 5.85726 17.9703 7.15474C19.2677 8.45223 19.9977 10.2113 20 12.0463V14.75H6V12.0463ZM13 23.5C12.4589 23.4983 11.9316 23.3292 11.4905 23.0159C11.0493 22.7026 10.716 22.2604 10.5363 21.75H15.4637C15.284 22.2604 14.9507 22.7026 14.5095 23.0159C14.0684 23.3292 13.5411 23.4983 13 23.5ZM22.625 20H3.375C3.14298 19.9999 2.9205 19.9076 2.75644 19.7436C2.59237 19.5795 2.50014 19.357 2.5 19.125C2.50076 18.429 2.77757 17.7618 3.26969 17.2697C3.76181 16.7776 4.42904 16.5008 5.125 16.5H20.875C21.571 16.5008 22.2382 16.7776 22.7303 17.2697C23.2224 17.7618 23.4992 18.429 23.5 19.125C23.4999 19.357 23.4076 19.5795 23.2436 19.7436C23.0795 19.9076 22.857 19.9999 22.625 20Z" fill="#6418C3" />
                    </svg>
                    <span className="badge light text-white bg-primary">{NbrNotif}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div id="DZ_W_Notification1" className="widget-media dz-scroll p-3 height380">
                      <ul className="timeline">
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img alt="image" width="50" src="images/avatar/1.jpg"/>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Dr sultads Send you Photo</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-info"> KG </div>
                            <div className="media-body">
                              <h6 className="mb-1">Resport created successfully</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-success">
                              <i className="fa fa-home"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Reminder : Treatment Time!</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2">
                              <img alt="image" width="50" src="images/avatar/1.jpg"/>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Dr sultads Send you Photo</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-danger"> KG </div>
                            <div className="media-body">
                              <h6 className="mb-1">Resport created successfully</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="timeline-panel">
                            <div className="media mr-2 media-primary">
                              <i className="fa fa-home"></i>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-1">Reminder : Treatment Time!</h6>
                              <small className="d-block">29 July 2020 - 02:26 PM</small>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a className="all-notification" href="#">See all notifications <i className="ti-arrow-right"></i>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link bell bell-link" href="#">
                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.4604 0.848877H3.31682C2.64742 0.849612 2.00565 1.11586 1.53231 1.58919C1.05897 2.06253 0.792727 2.7043 0.791992 3.3737V15.1562C0.792727 15.8256 1.05897 16.4674 1.53231 16.9407C2.00565 17.4141 2.64742 17.6803 3.31682 17.6811C3.53999 17.6812 3.75398 17.7699 3.91178 17.9277C4.06958 18.0855 4.15829 18.2995 4.15843 18.5227V20.3168C4.15843 20.6215 4.24112 20.9204 4.39768 21.1818C4.55423 21.4431 4.77879 21.6571 5.04741 21.8009C5.31602 21.9446 5.61861 22.0128 5.92292 21.9981C6.22723 21.9834 6.52183 21.8863 6.77533 21.7173L12.6173 17.8224C12.7554 17.7299 12.9179 17.6807 13.0841 17.6811H17.187C17.7383 17.68 18.2742 17.4994 18.7136 17.1664C19.1531 16.8335 19.472 16.3664 19.6222 15.8359L22.8965 4.05011C22.9998 3.67481 23.0152 3.28074 22.9413 2.89856C22.8674 2.51637 22.7064 2.15639 22.4707 1.84663C22.2349 1.53687 21.9309 1.28568 21.5822 1.11263C21.2336 0.939571 20.8497 0.849312 20.4604 0.848877ZM21.2732 3.60304L18.0005 15.3847C17.9499 15.5614 17.8432 15.7168 17.6964 15.8275C17.5496 15.9381 17.3708 15.9979 17.187 15.9978H13.0841C12.5855 15.9972 12.098 16.1448 11.6836 16.4219L5.84165 20.3168V18.5227C5.84091 17.8533 5.57467 17.2115 5.10133 16.7382C4.62799 16.2648 3.98622 15.9986 3.31682 15.9978C3.09365 15.9977 2.87966 15.909 2.72186 15.7512C2.56406 15.5934 2.47534 15.3794 2.47521 15.1562V3.3737C2.47534 3.15054 2.56406 2.93655 2.72186 2.77874C2.87966 2.62094 3.09365 2.53223 3.31682 2.5321H20.4604C20.5905 2.53243 20.7187 2.56277 20.8352 2.62076C20.9516 2.67875 21.0531 2.76283 21.1318 2.86646C21.2104 2.97008 21.2641 3.09045 21.2886 3.21821C21.3132 3.34597 21.3079 3.47766 21.2732 3.60304Z" fill="#6418C3" />
                      <path d="M5.84161 8.42333H10.0497C10.2729 8.42333 10.4869 8.33466 10.6448 8.17683C10.8026 8.019 10.8913 7.80493 10.8913 7.58172C10.8913 7.35851 10.8026 7.14445 10.6448 6.98661C10.4869 6.82878 10.2729 6.74011 10.0497 6.74011H5.84161C5.6184 6.74011 5.40433 6.82878 5.2465 6.98661C5.08867 7.14445 5 7.35851 5 7.58172C5 7.80493 5.08867 8.019 5.2465 8.17683C5.40433 8.33466 5.6184 8.42333 5.84161 8.42333Z" fill="#6418C3" />
                      <path d="M13.4161 10.1066H5.84161C5.6184 10.1066 5.40433 10.1952 5.2465 10.3531C5.08867 10.5109 5 10.725 5 10.9482C5 11.1714 5.08867 11.3855 5.2465 11.5433C5.40433 11.7011 5.6184 11.7898 5.84161 11.7898H13.4161C13.6393 11.7898 13.8534 11.7011 14.0112 11.5433C14.169 11.3855 14.2577 11.1714 14.2577 10.9482C14.2577 10.725 14.169 10.5109 14.0112 10.3531C13.8534 10.1952 13.6393 10.1066 13.4161 10.1066Z" fill="#6418C3" />
                    </svg>
                    <span className="badge light text-white bg-primary">{NbrNotif}</span>
                  </a>
                </li>
                <li className="nav-item dropdown notification_dropdown">
                  <a className="nav-link" href="#" data-toggle="dropdown">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.625 5.12506H21.75V1.62506C21.75 1.47268 21.7102 1.32295 21.6345 1.19068C21.5589 1.05841 21.45 0.948189 21.3186 0.870929C21.1873 0.79367 21.0381 0.75205 20.8857 0.750187C20.7333 0.748325 20.5831 0.786285 20.4499 0.860311L13 4.99915L5.55007 0.860311C5.41688 0.786285 5.26667 0.748325 5.11431 0.750187C4.96194 0.75205 4.8127 0.79367 4.68136 0.870929C4.55002 0.948189 4.44113 1.05841 4.36547 1.19068C4.28981 1.32295 4.25001 1.47268 4.25 1.62506V5.12506H3.375C2.67904 5.12582 2.01181 5.40263 1.51969 5.89475C1.02757 6.38687 0.750764 7.0541 0.75 7.75006V10.3751C0.750764 11.071 1.02757 11.7383 1.51969 12.2304C2.01181 12.7225 2.67904 12.9993 3.375 13.0001H4.25V22.6251C4.25076 23.321 4.52757 23.9882 5.01969 24.4804C5.51181 24.9725 6.17904 25.2493 6.875 25.2501H19.125C19.821 25.2493 20.4882 24.9725 20.9803 24.4804C21.4724 23.9882 21.7492 23.321 21.75 22.6251V13.0001H22.625C23.321 12.9993 23.9882 12.7225 24.4803 12.2304C24.9724 11.7383 25.2492 11.071 25.25 10.3751V7.75006C25.2492 7.0541 24.9724 6.38687 24.4803 5.89475C23.9882 5.40263 23.321 5.12582 22.625 5.12506ZM20 5.12506H16.3769L20 3.11256V5.12506ZM6 3.11256L9.62311 5.12506H6V3.11256ZM6 22.6251V13.0001H12.125V23.5001H6.875C6.64303 23.4998 6.42064 23.4075 6.25661 23.2434C6.09258 23.0794 6.0003 22.857 6 22.6251ZM20 22.6251C19.9997 22.857 19.9074 23.0794 19.7434 23.2434C19.5794 23.4075 19.357 23.4998 19.125 23.5001H13.875V13.0001H20V22.6251ZM23.5 10.3751C23.4997 10.607 23.4074 10.8294 23.2434 10.9934C23.0794 11.1575 22.857 11.2498 22.625 11.2501H3.375C3.14303 11.2498 2.92064 11.1575 2.75661 10.9934C2.59258 10.8294 2.5003 10.607 2.5 10.3751V7.75006C2.5003 7.51809 2.59258 7.2957 2.75661 7.13167C2.92064 6.96764 3.14303 6.87536 3.375 6.87506H22.625C22.857 6.87536 23.0794 6.96764 23.2434 7.13167C23.4074 7.2957 23.4997 7.51809 23.5 7.75006V10.3751Z" fill="#3E4954" />
                    </svg>
                    <span className="badge light text-white bg-primary">{NbrNotif}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <div id="DZ_W_TimeLine02" className="widget-timeline dz-scroll style-1 ps ps--active-y p-3 height370">
                      <ul className="timeline">
                        <li>
                          <div className="timeline-badge primary"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>10 minutes ago</span>
                            <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>. </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge info"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong>
                            </h6>
                            <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge danger"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>30 minutes ago</span>
                            <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong>
                            </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge success"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>15 minutes ago</span>
                            <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge warning"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                          </a>
                        </li>
                        <li>
                          <div className="timeline-badge dark"></div>
                          <a className="timeline-panel text-muted" href="#">
                            <span>20 minutes ago</span>
                            <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown header-profile">
                  <a className="nav-link" href="#" role="button" data-toggle="dropdown">
                    <div className="header-info">
                      <span className="text-black">Hello, <strong>Fedi</strong>
                      </span>
                      <p className="fs-12 mb-0">Super Admin</p>
                    </div>
                    <img src="https://cdn.discordapp.com/attachments/475963741616472074/872798593101225984/IMG_20210617_021024_482.jpg" width="20" alt="" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="./app-profile.html" className="dropdown-item ai-icon">
                      <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      <span className="ml-2">Profile </span>
                    </a>
                    <a href="./email-inbox.html" className="dropdown-item ai-icon">
                      <svg id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                      <span className="ml-2">Inbox </span>
                    </a>
                    <a href="./page-login.html" className="dropdown-item ai-icon">
                      <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" className="text-danger" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                      </svg>
                      <span className="ml-2">Logout </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </div>
    );
}