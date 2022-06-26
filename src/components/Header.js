import Image from "next/image";

export default function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="clb-nav">
                    <div className="clb-nav__logo">
                        <Image src="/images/logo.svg" alt="CLB Yazılım" width={158} height={24} />
                    </div>

                    <div className="clb-nav__menu">
                        <ul>
                            <li><a className='btn active' href="#about-us">Hakkımızda</a></li>
                            <li><a className='btn' href="#applications">Uygulamalar</a></li>
                            <li><a className='btn' href="#activities">Faaliyetler</a></li>
                            <li><a className='btn' href="#contact-us">Bize Ulaşın</a></li>
                        </ul>
                    </div>

                    <div className="clb-nav-offer">
                        <a className="btn btn--primary" href="#">Teklif Al</a>
                    </div>
                </div>
            </div>
        </div>
    )
}