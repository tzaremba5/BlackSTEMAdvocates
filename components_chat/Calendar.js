import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../calendar_utils/calendar";
import cn from "../calendar_utils/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Event from "./Event";

export default function Calendar() {
	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
		<div className="px-[20px] mt-[30px] mb-[20px] tablet:ml-[30px] flex flex-col tablet:flex-row gap-10 sm:divide-x sm:w-1/2 sm:flex-row flex-col">
			<div className="w-96">
				<div className="flex justify-between items-center">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-gray-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-gray-400",
											today
												? "border-red-500 border-2 rounded-md "
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "border-2 border-black rounded-md"
												: "",
											"h-10 w-10 grid place-content-center rounded-md hover:border-black hover:border-2 transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className=" tablet:w-[700px] sm:px-">
				<h1 className=" font-semibold">
					Events for {selectDate.toDate().toDateString()}
				</h1>
                <div className="overflow-y-scroll overflow-visible">
                    <div className="mt-[20px]">
                        <Event event_name={"Weekly Black STEM Advocates Metting @ 12:30 PM EST"} event_description={"Join us for a gathering that unites Black professionals and enthusiasts in Science, Technology, Engineering, and Mathematics (STEM). These meetings offer a platform for collaboration, networking, and discussion on trends and challenges, with a focus on promoting diversity and inclusion within the STEM fields. Whether you're an experienced professional or just passionate about STEM, be part of a community that fosters growth and celebrates Black excellence in these vital sectors."}/>
                    </div>
                    <div className="mt-[20px]">
                        <Event event_name={"New Member Orientation @ 2:00 PM EST"} event_description={"Join us for a special event designed to welcome and introduce newcomers to our community and organization. During this orientation, you'll learn about our mission, values, upcoming events, and how you can get involved, all while meeting fellow members and forming connections. Whether you're looking to contribute, learn, or network, this orientation is your first step towards becoming an active and engaged member of our community."}/>
                    </div>
                </div>
                
			</div>
		</div>
	);
}
