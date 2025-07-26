export default function BootstrapGrids() {
    return (
        <>
            <div className="container-fluid p-4">
                {/* Three Column Layout */}
                <div className="section-title">Three Column Layout</div>
                <div className="row">
                    <div className="col-4 bg-warning text-dark demo-box">
                        Column 1
                    </div>
                    <div className="col-4 bg-primary text-white demo-box">
                        Column 2
                    </div>
                    <div className="col-4 bg-success text-white demo-box">
                        Column 3
                    </div>
                </div>

                {/* Split Layout (4-8 columns) */}
                <div className="section-title">Split Layout (33% - 67%)</div>
                <div className="row">
                    <div className="col-4 bg-warning text-dark demo-box">
                        Left third
                    </div>
                    <div className="col-8 bg-success text-white demo-box">
                        Two thirds
                    </div>
                </div>

                {/* Half and Half */}
                <div className="section-title">Half and Half Layout</div>
                <div className="row">
                    <div className="col-6 bg-danger text-white demo-box">
                        Left half
                    </div>
                    <div className="col-6 bg-primary text-white demo-box">
                        Right half
                    </div>
                </div>

                {/* Sidebar Layout */}
                <div className="section-title">Sidebar Layout</div>
                <div className="row">
                    <div className="col-2 bg-dark text-white demo-box" style={{ minHeight: "120px" }}>
                        <h5>Sidebar</h5>
                    </div>
                    <div className="col-8 bg-secondary text-white demo-box">
                        <h5>Main content</h5>
                    </div>
                    <div className="col-2 bg-info text-white demo-box">
                        <h5>Sidebar</h5>
                    </div>
                </div>

                {/* Complex Layout Example */}
                <div className="section-title">Complex Nested Layout</div>
                <div className="row">
                    <div className="col-12 bg-primary text-white demo-box">
                        Full Width Header
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 bg-warning text-dark demo-box">
                        Sidebar
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6 bg-success text-white demo-box">
                                Content 1
                            </div>
                            <div className="col-6 bg-danger text-white demo-box">
                                Content 2
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 bg-secondary text-white demo-box">
                                Full Width Content
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 bg-dark text-white demo-box">
                        Full Width Footer
                    </div>
                </div>
                <div className="section-title">Self</div>
                <div className="row">
                    <div className="col-12 bg-success text-white demo-box">Top</div>
                </div>
                <div className="row">
                    <div className="col-4 bg-danger text-white demo-box">Sidebar</div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-6 bg-primary text-white demo-box">1/2</div>
                            <div className="col-6 bg-primary text-white demo-box">1/2</div>
                        </div>
                        <div className="row">
                            <div className="col-12 bg-secondary text-dark demo-box">Whole</div>
                        </div>
                    </div>
                </div>
                    
            </div>
            </>
    )
}