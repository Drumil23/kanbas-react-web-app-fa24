export default function Dimensions() {
    return (
        <div id="wd-dimensions">
            <div id="wd-css-dimensions">
                <h2>Dimensions</h2>
                <div>
                    <div className="wd-dimensions-portrait bg-color-yellow" >Portrait</div>
                    <div className="wd-dimensions-landscape bg-color-blue">Landscape</div>
                    <div className="wd-dimensions-square bg-color-red">Square</div>
                </div>
            </div>
            <div className="wd-css-position-absolute">
                <h2>Absolute position</h2>

                <div className="wd-pos-relative">
                    {/* Now this is the parent container that defines the positioning context */}

                    <div className="wd-pos-absolute-10-10 bg-color-yellow wd-dimensions-portrait">
                    Portrait
                    </div>

                    <div className="wd-pos-absolute-50-50 bg-color-blue fg-color-white wd-dimensions-landscape">
                    Landscape
                    </div>

                    <div className="wd-pos-absolute-120-20 bg-color-red wd-dimensions-square">
                    Square
                    </div>
                </div>
            </div>

            <div className="wd-css-position-absolute">
                <h2>Z index</h2>

                <div className="wd-pos-relative">
                    {/* Now this is the parent container that defines the positioning context */}

                    <div className="wd-pos-absolute-10-10 bg-color-yellow wd-dimensions-portrait">
                    Portrait
                    </div>

                    <div className="wd-pos-z-index-1 wd-pos-absolute-50-50 bg-color-blue fg-color-white wd-dimensions-landscape">
                    Landscape
                    </div>

                    <div className="wd-pos-absolute-120-20 bg-color-red wd-dimensions-square">
                    Square
                    </div>
                </div>
            </div>

        </div>
    );
}