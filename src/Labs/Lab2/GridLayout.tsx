export default function GridLayout() {
    return (
        <div id="wd-css-grid-layout">
            <div id="wd-css-left-right-layout">
            <h2>Grid layout</h2>
                <div className="wd-grid-row">
                    <div className="wd-grid-col-half-page bg-color-yellow">
                    <h3>Left half</h3>
                    </div>
                    <div className="wd-grid-col-half-page bg-color-blue fg-color-white">
                    <h3>Right half</h3>
                    </div>
                </div>

            <h2>Grid layout with 1/3 and 2/3</h2>
                <div className="wd-grid-row">
                    <div className="wd-grid-col-one-third bg-color-green">
                    <h3>1/3</h3>
                    </div>
                    <div className="wd-grid-col-two-thirds bg-color-red fg-color-white">
                    <h3>2/3</h3>
                    </div>
                </div>

            <h2>Side bar and Main content</h2>
                <div className="wd-grid-row">
                    <div className="wd-grid-col-sidebar-left bg-color-purple fg-color-white">
                        <h3>Side bar Left</h3>
                        <p>
                            This is the left sidebar. It can contain links, navigation, or any other content you want to display on the left side of the page.
                        </p>
                    </div>
                    <div className="wd-grid-col-main-content bg-color-orange fg-color-white">
                        <h3>Main content</h3>
                        <p>
                            This is the main content area. It can contain text, images, videos, or any other content you want to display in the main part of the page.
                        </p>
                    </div>
                    <div className="wd-grid-col-sidebar-right bg-color-purple fg-color-white">
                        <h3>Side bar Right</h3>
                        <p>
                            This is the right sidebar. It can contain links, navigation, or any other content you want to display on the right side of the page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

}
