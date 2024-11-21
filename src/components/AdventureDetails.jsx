import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Modal from "../components/Modal";
import { Helmet } from "react-helmet";

const AdventureDetails = () => {
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [adventure, setAdventure] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchAdventureDetails = async () => {
            const response = await fetch("/advanture.json");
            const data = await response.json();
            const adventure = data.find(
                (adventure) => adventure.id === parseInt(id)
            );
            setAdventure(adventure);
        };

        fetchAdventureDetails();
    }, [id]);

    const handleExpertConsultation = () => {
        const now = new Date();
        const currentHour = now.getHours();

        const startHour = 10;
        const endHour = 20;

        if (currentHour >= startHour && currentHour < endHour) {
            window.open("https://meet.google.com", "_blank");
        } else {
            setIsModalOpen(true);
        }
    };

    if (!adventure) {
        return (
            <p className="text-center my-4 text-success font-semibold">
                Not Found!
            </p>
        );
    }
    return (
        <div>
            <Helmet>
                <title>{adventure.title}</title>
            </Helmet>

            <div className="m-5 flex flex-col md:flex-row gap-4 text-left">
                <div>
                    <img
                        className="w-full rounded-lg h-[400px]"
                        src={adventure.image}
                        alt={adventure.title}
                    />
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-8">
                        {adventure.title}
                    </h1>
                    <p className="mt-2">{adventure.shortDescription}</p>
                    <p className="mt-2">
                        <strong>Location:</strong> {adventure.location}
                    </p>
                    <p className="mt-2">
                        <strong>Duration:</strong> {adventure.duration}
                    </p>
                    <p className="mt-2">
                        <strong>Adventure Level:</strong>{" "}
                        {adventure.adventureLevel}
                    </p>
                    <p className="mt-2">
                        <strong>Cost:</strong> ${adventure.adventureCost}
                    </p>

                    <h2 className="mt-4 text-xl font-bold">
                        Eco-friendly Features
                    </h2>
                    <ul className="list-inside list-disc">
                        {adventure.ecoFriendlyFeatures.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>

                    <h2 className="mt-4 text-xl font-bold">
                        Special Instructions
                    </h2>
                    <ul className="list-inside list-disc">
                        {adventure.specialInstructions.map(
                            (instruction, index) => (
                                <li key={index}>{instruction}</li>
                            )
                        )}
                    </ul>

                    <button
                        onClick={handleExpertConsultation}
                        className="btn btn-success text-white mt-3"
                    >
                        Talk With Expert
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <div className="p-4 text-center">
                        <h2 className="text-2xl font-bold">
                            Consultation Unavailable
                        </h2>
                        <p className="mt-2">
                            Our consultation hours are from{" "}
                            <strong>10:00 AM</strong> to{" "}
                            <strong>8:00 PM</strong>. Please visit our website
                            during consultation hours.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="btn btn-success text-white mt-4"
                        >
                            Close
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default AdventureDetails;
