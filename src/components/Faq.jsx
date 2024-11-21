import { Helmet } from "react-helmet";

const Faq = () => {
    return (
        <div className="flex flex-col gap-4 my-10">
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-xl font-medium">
                    1. What is Eco Adventure about?
                </div>
                <div className="collapse-content">
                    <p>
                        Answer: Eco Adventure is a platform dedicated to
                        promoting sustainable and environmentally friendly
                        travel experiences. We offer information, tips, and
                        curated eco-friendly adventure packages for nature
                        lovers and responsible travelers.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    2. What kind of activities can I find on Eco Adventure?
                </div>
                <div className="collapse-content">
                    <p>
                        Answer: You’ll find a wide range of activities,
                        including hiking, camping, wildlife safaris, kayaking,
                        and eco-volunteering opportunities. All our activities
                        are designed to minimize environmental impact and
                        support conservation efforts.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    3. Are the adventure packages suitable for beginners?
                </div>
                <div className="collapse-content">
                    <p>
                        Answer: Absolutely! Our packages are categorized by
                        difficulty levels. Whether you’re a seasoned adventurer
                        or a beginner, you can find an experience that suits
                        your skills and preferences.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    4. How does Eco Adventure ensure sustainability in its
                    activities?
                </div>
                <div className="collapse-content">
                    <p>
                        Answer: We partner with eco-conscious tour operators,
                        prioritize activities with minimal environmental impact,
                        and encourage travelers to follow sustainable practices
                        like reducing waste, respecting wildlife, and supporting
                        local communities.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    5. How can I book an adventure or get more information?
                </div>
                <div className="collapse-content">
                    <p>
                        Answer: You can explore detailed information about each
                        package on our website. Once you find an adventure
                        you’re interested in, simply follow the booking
                        instructions or contact us directly via the contact form
                        or provided support channels.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Faq;
