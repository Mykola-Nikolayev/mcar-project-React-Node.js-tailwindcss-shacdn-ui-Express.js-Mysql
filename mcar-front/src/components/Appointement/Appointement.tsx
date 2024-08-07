import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { cn } from "../../lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { BASE_URL } from "./../../constant/constant";
import { BeatLoader } from "react-spinners";

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full sm:w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

const Appointement = () => {
  c

  const senders = async () => {
    setIsloading(true);
    try {
      const formeData = new FormData();
      formeData.append("firstName", firstName);
      formeData.append("lastName", lastName);
      formeData.append("email", email);
      formeData.append("contact", contact);
      formeData.append("adress1", Adress1);
      formeData.append("adress2", Adress2);
      formeData.append("city", city);
      formeData.append("codePostal", codePostal);
      formeData.append("province", province);
      formeData.append("interet", interet);
      formeData.append("receiveNotif", receiveNotifState);
      formeData.append("selectedTimer", selectedTimer);
      formeData.append("specifiedTime", specifiedTime);
      if (date) {
        formeData.append("StartDateReservation", date?.from && "");
        formeData.append("EndDateReservation", date?.to && " ");
      }

      const { data: result } = await axios.post(BASE_URL + "/Appointement/createAppointment", formeData);

      setIsloading(false);
    } catch (error: any) {
      console.log(error.stack);
      setIsloading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-screen rounded-2xl shadow shadow-gray-400 flex flex-col justify-start items-start p-4 sm:p-8">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center text-neutral-500 font-semibold my-4">Appointment Request Form</h1>
        <p className="text-gray-400 text-center my-2">Let us know how we can help you!</p>
      </div>
      <div className="w-full border-t border-gray-200 my-4"></div>
      <div className="w-full">
        <div className="w-full flex flex-wrap justify-center items-center gap-4">
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">Full Name</Label>
            <Input type="text" required value={firstName} onChange={(e: any) => setFirstName(e.target.value)} className="rounded w-full my-2" />
            <Label className="text-gray-400">First Name</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">&nbsp;</Label>
            <Input type="text" required value={lastName} onChange={(e: any) => setLastName(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">Last Name</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">Contact Number</Label>
            <Input type="text" required value={contact} onChange={(e: any) => setContact(e.target.value)} className="rounded w-full my-2 placeholder:text-gray-300" placeholder="(000) 000 - 000" />
            <Label className="text-gray-400">Please Enter a valid phone number</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">Email Address</Label>
            <Input type="text" required value={email} onChange={(e: any) => setEmail(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">example@example.com</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">Address</Label>
            <Input type="text" required value={Adress1} onChange={(e: any) => setAdress1(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">Street Address</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">&nbsp;</Label>
            <Input type="text" required value={Adress2} onChange={(e: any) => setAdress2(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">Street Address Line 2</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start my-2">
            <Label className="font-semibold">City</Label>
            <Input type="text" required value={city} onChange={(e: any) => setCity(e.target.value)} className="rounded w-full my-2" />
            <Label className="text-gray-400">City</Label>
          </div>
          <div className="w-full sm:w-[48%] flex flex-col justify-start items-start">
            <Label className="font-semibold">State/Province</Label>
            <Input type="text" required value={province} onChange={(e: any) => setProvince(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">State/Province</Label>
          </div>
          <div className="w-full  flex flex-col justify-start items-start">
            <Label className="font-semibold">Postal/Zip Code</Label>
            <Input type="text" required value={codePostal} onChange={(e: any) => setPostal(e.target.value)} className="w-full my-2" />
            <Label className="text-gray-400">Postal/Zip Code</Label>
          </div>
        </div>
        <div className="w-full mt-4 flex flex-col justify-start items-start">
          <Label className="font-semibold text-start my-2">Any other specific date and time, if the above selection is not suitable.</Label>
          <div className="w-full flex flex-wrap items-center gap-4 mt-2">
            <div className="flex flex-col justify-start items-start">
              <DatePickerWithRange className="w-full sm:w-[300px]" />
            </div>
            <div className="flex flex-col">
              <Input type="text" className="w-full sm:w-[120px] text-center" placeholder="03:06" value={specifiedTime} onChange={(e: any) => setSpecifiedTime(e.target.value)} />
            </div>
            <div className="flex flex-col">
              <Select onValueChange={(e) => setSelectedTimer(e)}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Select a Timer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="AM">AM</SelectItem>
                    <SelectItem value="PM">PM</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="w-full mt-4 text-start">
          <Label className="font-semibold">What services are you interested in?</Label>
          <Textarea value={interet} onChange={(e: any) => setInteret(e.target.value)} placeholder="Type here your interest ..." className="w-full min-h-[150px] my-2 placeholder:text-gray-400" />
        </div>
        <div className="w-full mt-4 text-start">
          <Label className="font-semibold ">Would you like to receive more promotions?</Label>
          <div className="w-full flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center">
              <Switch name="selector" value={receiveNotifState} onChange={(e: any) => setNotifReceiverState(e.target.value)} />
              <Label className="mx-4">Get Notified</Label>
            </div>
            <div className="flex items-center">
              <Switch name="selector" value={receiveNotifState} onChange={(e: any) => setNotifReceiverState(e.target.value)} />
              <Label className="mx-4">No thanks</Label>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-200 my-4"></div>
        <div className="w-full flex flex-col justify-center items-center my-4">
          <Button className="w-full sm:w-[40%] text-xl hover:text-white hover:bg-dark" onClick={senders}>
            {isLoading ? (
              <BeatLoader color="#ffffff" size={10} />
            ) : (
              "Submit"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Appointement;
