import Image from "next/image"
import Link from "next/link"
import NavFooter from "./navFooter"

export default function Footer() {
    return(
        <section className="footer pt-50">
            <footer>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 text-lg-start text-center">
                            <Link href="/">
                                <a className="mb-30">
                                    <Image src="/icon/logo.svg" width={60} height={60} alt=""/>
                                </a>
                            </Link>
                            <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers <br/> untuk menjadi
                                pemenang sejati</p>
                            <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-8 mt-lg-0 mt-20">
                            <div className="row gap-sm-0">
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <NavFooter
                                        title="Company"
                                        listNav={['About Us', 'Press Release', 'Terms of Use', 'Privacy & Policy']}
                                    />
                                </div>
                                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                                    <NavFooter
                                        title="Support"
                                        listNav={['Refund Policy', 'Unlock Rewards', 'Live Chatting']}                                
                                    />
                                </div>
                                <div className="col-md-4 col-12 mt-lg-0 mt-md-0 mt-25">
                                    <NavFooter
                                        title="Company"
                                        listNav={['hi@store.gg', 'team@store.gg', 'Pasific 12, Jakarta Selatan', '021 - 1122 - 9090']}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}