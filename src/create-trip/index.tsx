import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import OptionCardGrid from "./OptionCardGrid";
import { toast } from "sonner";

const CreateTrip = () => {
  const [place, setPlace] = useState<any>();

  const [formData, setFormData] = useState<{
    location: any;
    noOfDays: number | undefined;
    budget: string;
    traveler: string;
  }>({
    location: "",
    noOfDays: undefined,
    budget: "",
    traveler: "",
  });

  const handleInputChange = (name: keyof typeof formData, value: (typeof formData)[keyof typeof formData]) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const OnGenerateTrip = () => {
    if (Object.values(formData).some((v) => !v)) {
      toast("Please fill all the fields");
      return;
    }

    console.log(formData);
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel</h2>
      <p className="mt-3 text-gray-500 text-xl">just a few steps to create your trip</p>
      <div className="mt-20 flex flex-col gap-10">
        <div>
          <h2 className="text-xl my-3 font-medium">What is destination of choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              value: place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div className="mt-10">
          <h2 className="text-xl my-3 font-medium">When are you planning to travel?</h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => {
              const value = parseInt(e.target.value);

              handleInputChange("noOfDays", value);
            }}
          />
        </div>

        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <OptionCardGrid
          options={SelectBudgetOptions}
          value={formData.budget}
          selectProps={{
            name: "budget",
            value: "title",
            onClick: handleInputChange,
          }}
        />

        <h2 className="text-xl my-3 font-medium">Who do you plan on traveling with on your next adventure?</h2>
        <OptionCardGrid
          options={SelectTravelesList}
          value={formData.traveler}
          selectProps={{
            name: "traveler",
            value: "title",
            onClick: handleInputChange,
          }}
        />

        <div className="my-10 flex justify-end">
          <Button onClick={OnGenerateTrip}>Generate Trip</Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
