import Image from "next/image";
import Button from "@components/Button";
import Navigation from "@components/Navigation";

export default function Header(props) {
    return(
        <div className="header">
            <div className="container">
                <div className="clb-nav">
                    <div className="clb-nav__logo">
                        <Image src="/images/logo.svg" alt="CLB Yazılım" width={160} height={80} layout="intrinsic" />
                    </div>

                    {props.actions !== false && <>
                        <div className="clb-nav__menu">
                            <Navigation/>
                        </div>

                        <div className="clb-nav__offer">
                            <Button className='btn-primary' url="#" >Teklif Al</Button>
                        </div>
                    </>
                    }
                </div>
            </div>
        </div>
    )
}