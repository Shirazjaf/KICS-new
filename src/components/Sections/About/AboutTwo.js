import Link from "next/link"

const AboutTwo = () => {
    return (
        <section className="about-block lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] sm:pb-10 pb-8">
            <div className="container">
                <div className="flex gap-y-3 items-center justify-between max-lg:flex-wrap">
                    <div className="w-full xl:w-5/12 lg:w-6/12">
                        <h3 className="heading3">We are your strategic partner for industrial and community development</h3>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <div className="desc">At Kairali Industrial Cooperative Society Ltd (KICS), We are more than a development organization—we are dedicated partners in your growth. Guided by a mission to empower communities and industries, we deliver innovative solutions and sustainable strategies that drive meaningful progress.</div>
                        <Link className="text-button-sm inline-block mt-4 border-b-2 border-black" href="/about-us">Our Company</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo