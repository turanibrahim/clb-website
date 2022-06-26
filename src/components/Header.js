import Image from "next/image";
import Button from "@components/Button";
import Navigation from "@layouts/Navigation";

export default function Header() {
    return(
        <div className="header">
            <div className="container">
                <div className="clb-nav">
                    <div className="clb-nav__logo">
                        <Image src="/images/logo.svg" alt="CLB Yazılım" width={158} height={24} />
                    </div>

                    <div className="clb-nav__menu">
                        <Navigation/>
                    </div>

                    <div className="clb-nav__offer">
                        <Button className={'btn-primary'} url="#" >Teklif Al</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}