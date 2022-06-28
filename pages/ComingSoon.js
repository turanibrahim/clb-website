import Layout from '@layouts/Base';

export default function ComingSoon() {
    return (
        <Layout actions={false}>
            <section id="coming-soon">
                <div className="container">
                    <div className="clb-text-content">
                        <div className="clb-subtitle">
                            Web sitemiz
                        </div>

                        <div className="clb-title">
                            ÇOK YAKINDA
                        </div>
                    </div>
                </div>

                <div className="clb-coming-soon-footer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        className="waves"
                        preserveAspectRatio="none"
                        viewBox="0 24 150 28"
                    >
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"/>
                        </defs>
                        <g className="parallax">
                            <use x="48" fill="rgba(255,255,255,0.7" xlinkHref="#gentle-wave"/>
                            <use x="48" y="3" fill="rgba(255,255,255,0.5)" xlinkHref="#gentle-wave"/>
                            <use x="48" y="5" fill="rgba(255,255,255,0.3)" xlinkHref="#gentle-wave"/>
                            <use x="48" y="7" fill="#fff" xlinkHref="#gentle-wave"/>
                        </g>
                    </svg>

                    <div className="clb-coming-soon-content">
                    </div>
                </div>
            </section>
        </Layout>
    );
}