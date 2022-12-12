import { FiMapPin } from "react-icons/fi";
import { CONTACT } from "./constant";

export default function Contact() {
	return (
		<div id="contact" className="container mx-auto mb-20">
			<div className="mb-10">
				<h4
					className="uppercase text-lg text-gray-400 
                    after:content-[''] 
                    after:w-[120px] 
                    after:h-[1px] 
                    after:bg-[#ffde9e] 
                    after:inline-block 
                    after:my-2 
                    after:mx-2 "
				>
					Contact
				</h4>
				<h3 className="uppercase text-4xl font-bold">Contact us</h3>
			</div>
			<div className="flex justify-between">
				<div className="flex flex-col gap-10 w-1/2">
					{CONTACT.map((item) => (
						<div key={item.id} className="flex items-center gap-3">
							{item.icon}
							<div className="flex flex-col">
								<h4 className="text-2xl font-medium">{item.title}</h4>
								<h5 className="text-lg">{item.description}</h5>
							</div>
						</div>
					))}
				</div>
				<div className="w-1/2">
					<form action="">
						<div className="flex gap-3 mb-5">
							<div className="flex flex-col w-full">
								<label htmlFor="">Your name</label>
								<input
									type="text"
									name="name"
									className="rounded-md border border-gray-400 focus:ring-0"
								/>
							</div>{" "}
							<div className="flex flex-col w-full ">
								<label htmlFor="">Your Email</label>
								<input
									type="text"
									name="email"
									id=""
									className="rounded-md border border-gray-400 focus:ring-0"
								/>
							</div>
						</div>
						<div className="flex gap-3 mb-5">
							<div className="flex flex-col w-full">
								<label htmlFor="">Phone number</label>
								<input
									type="text"
									name="name"
									className="rounded-md border border-gray-400 focus:ring-0"
								/>
							</div>{" "}
							<div className="flex flex-col w-full ">
								<label htmlFor="">Complaint</label>
								<select
									name="complaint"
									id=""
									className="rounded-md border border-gray-400 focus:ring-0"
								>
									<option value="">Feedback</option>
									<option value="">Global Retail</option>
									<option value="">Payments</option>
									<option value="">Other Solutions</option>
									<option value="">Something Else</option>
								</select>
							</div>
						</div>
						<div className="flex flex-col w-full mb-5">
							<label htmlFor="">Subject</label>
							<input
								type="text"
								name="name"
								className="rounded-md border border-gray-400 focus:ring-0"
							/>
						</div>
						<div className="mb-5">
							<textarea
								name="message"
								id=""
								cols="30"
								rows="10"
								className="w-full rounded-md focus:ring-0"
							></textarea>
						</div>
                        <div className="flex justify-center">
                            <button className="bg-blue-500 px-5 py-3 text-white rounded-md">Send Message</button>
                        </div>
					</form>
				</div>
			</div>
		</div>
	);
}
