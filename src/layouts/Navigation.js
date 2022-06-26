import Button from "@components/Button";

export default function Navigation() {
    return (
        <nav className='clb-navigation'>
            <ul>
                <li><Button className='btn--navigation active' url="#about-us">Hakkımızda</Button></li>
                <li><Button className='btn--navigation' url="#applications">Uygulamalar</Button></li>
                <li><Button className='btn--navigation' url="#activities">Faaliyetler</Button></li>
                <li><Button className='btn--navigation' url="#contact-us">Bize Ulaşın</Button></li>
            </ul>
        </nav>
    )
}