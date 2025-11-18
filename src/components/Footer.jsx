import facebook from '../img/footer-facebook.png'
import periscope from '../img/footer-periscope.png'
import twitter from '../img/footer-twitter.png'
import youtube from '../img/footer-youtube.png'
import pinterest from '../img/footer-pinterest.png'
import { NavLink } from 'react-router-dom'


export default function Footer() {

    const list = [
        {
            id: 1,
            title: 'CONTACTS',
            links: [
                {
                    id: 2,
                    text: 'Terms Of Use'
                },
                {
                    id: 3,
                    text: 'Privacy policy (New)'
                },
                {
                    id: 4,
                    text: 'Ad Choices'
                },
                {
                    id: 5,
                    text: 'Advertising'
                },
                {
                    id: 6,
                    text: 'Jobs'
                },
                {
                    id: 7,
                    text: 'Subscriptions'
                },
                {
                    id: 8,
                    text: 'Talent Workshops'
                },
                {
                    id: 9,
                    text: 'CPSC Certificates'
                },
                {
                    id: 10,
                    text: 'Ratings'
                },
                {
                    id: 11,
                    text: 'Shop Help'
                },
                {
                    id: 12,
                    text: 'Contact Us'
                }
            ]
        },
        {
            id: 13,
            title: 'WORK SHOPS',
            links: [
                {
                    id: 14,
                    text: 'HOME',
                    to: '/'
                },
                {
                    id: 15,
                    text: 'PRODOTTI',
                    to: '/prodotti'
                },
                {
                    id: 16,
                    text: 'CHI SIAMO',
                    to: '/contacts'
                }
            ]
        }

    ]

    return (
        <>
            <div className="content">
                <div className="all">
                    <div className="up">
                        {list.map((items) => (
                            <ul key={items.id}>
                                <h3><strong>{items.title}</strong></h3>
                                {items.links.map((link) => (
                                    <NavLink to={link.to} key={link.id}><li>{link.text}</li></NavLink>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>

            </div>
            <div className="low">
                <NavLink to='/prodotti'><button>ACQUISTA</button></NavLink>
                <div className="social">
                    <a href="" className="follow"><strong>FOLLOW US</strong></a>
                    <a href=""><img src={facebook} alt="" /></a>
                    <a href=""><img src={twitter} alt="" /></a>
                    <a href=""><img src={youtube} alt="" /></a>
                    <a href=""><img src={pinterest} alt="" /></a>
                    <a href=""><img src={periscope} alt="" /></a>
                </div>
            </div>


        </>
    )
}