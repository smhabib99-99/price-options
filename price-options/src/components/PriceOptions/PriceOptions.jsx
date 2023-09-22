import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": "$29.99/month",
            "features": [
                "Access to cardio and weightlifting areas",
                "Unlimited group fitness classes",
                "Locker room access",
                "Free Wi-Fi",
                "24/7 gym access"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": "$49.99/month",
            "features": [
                "All features of Basic Membership",
                "2 personal training sessions per month",
                "Sauna and steam room access",
                "Towel service",
                "Nutritional consultation",
                "Access to the swimming pool"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": "$89.99/month",
            "features": [
                "All features of Basic Membership for up to 4 family members",
                "Access to kids' play area",
                "Family locker room",
                "Discounts on additional personal training sessions",
                "Monthly family fitness class",
                "Guest passes (2 per month)"
            ]
        },
        {
            "id": 4,
            "name": "Student Membership",
            "price": "$19.99/month",
            "features": [
                "Access to cardio and weightlifting areas",
                "Unlimited group fitness classes",
                "Locker room access",
                "Student ID required",
                "Available to full-time students only"
            ]
        }
    ]


    return (
        <div className="m-4">
            <h2 className=" m-4 text-5xl">Best prices in the town</h2>

            <div className="grid md:grid-cols-3 gap-10">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                    // priceOptions.map(x => <PriceOption key={x.id} opt={x}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;