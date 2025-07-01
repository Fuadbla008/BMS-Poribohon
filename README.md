<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link rel="stylesheet" href="stylesheet/style.css">
    <title>BMS Poribohon</title>
</head>

<body>
    <!-- this is navber. start from here -->
    <nav class="flex justify-between px-20 py-5">
        <div class="w-1/3 bg-slate-400">
            <h1 class="font-bold text-3xl w-auto">BMS Poribohon</h1>
        </div>
        <div class="w-4/12 p-5 bg-slate-500">
            <ul class="flex justify-between">
                <li>Home</li>
                <li>About</li>
                <li>Destination</li>
                <li>Search</li>
            </ul>
        </div>
        <div class="flex w-[130px] h-[56px] align-middle justify-center click-div ">
            <img src="/asset/image/bus-icon.png" alt="" class="">
            <span class="font-bold text-2xl"> Bus</span>
        </div>
    </nav>

    <!-- section body. include banner and coupon offer -->
    <section>
        <!-- banner and popup -->
        <div>
            <div class="flex flex-col justify-center items-center ">
                <h1>End-To-End Travel </h1>
                <h1>BMS Poribohon</h1>
                <p>Yes, you can run unit tests and view the results directly within the app. The integrated testing
                    feature for a streamlined.</p>
                <button>Buy Tickets</button>
            </div>
            <!-- this is three card section -->
            <div class=" flex w-2/3 items-center mx-20 h-auto ">
                <div class="flex flex-row items-center justify-between h-auto w-auto">
                    <div>
                        <div>
                            <img src="/asset/image/people.png" alt="">
                        </div>
                        <div>
                            <h1>500K+</h1>
                            <p>Registerd users</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/asset/image/ticket-cupon.png" alt="">
                        </div>
                        <div>
                            <h1>1.7 Lacks</h1>
                            <p>Ticket sold</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="/asset/image/stoppage.png" alt="">
                        </div>
                        <div>
                            <h1>80K+</h1>
                            <p>Rental Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- popup section -->
        <div class="flex flex-col items-center">
            <h1 class="font-bold text-4xl">Best Offers For You</h1>
            <div class="flex flex-row">
                <div class="flex flex-row m-5 w-[573px] h-[220px] radius24 bg-green-400">
                    <div class=" p-10 w-3/6">
                        <h1>15% off</h1>
                        <h3>on your next purchase</h3>
                        <p>use by April 2025</p>
                    </div>
                    <div>
                        <img src="/asset/image/cupon-devider.png" alt="">
                    </div>
                    <div class="flex items-center">
                        <p>New15</p>
                        <p>Coupon code</p>
                    </div>
                </div>
                <div class="flex flex-row m-5 w-[573px] h-[220px] radius24  bg-purple-400">
                    <div class=" p-10 w-3/6">
                        <h1>20% off</h1>
                        <h3>on your next purchase</h3>
                        <p>use by April 2025</p>
                    </div>
                    <div>
                        <img src="/asset/image/cupon-devider.png" alt="">
                    </div>
                    <div class="flex items-center">
                        <p>Couple 20</p>
                        <p>Coupon code</p>
                    </div>
                </div>
            </div>

            <button class="click-div radius24">See All Offers</button>
        </div>
    </section>

    <!-- main section start -->
    <main class="bg-[#f7f8f8] rounded-t-3xl">
        <section class="calculateHeader flex flex-col items-center">
            <h1 class="font-bold mt-10 text-4xl">BMS Poribohon</h1>
            <p class="font-serif mt-3 text-lg">Yes, you can run unit tests and view the results directly within the app.
                The integrated
                testing features allow for a streamlined</p>
        </section>

        <!-- route, seat, and seat price include -->
        <section class="seatDetails flex h-[418px] w-[1170px] bg-[#ffffff] radius24">
            <div class="w-7/12 p-[32px]">
                <div class="detailsandseat flex justify-between">
                    <div class="details flex p-5 gap-5">
                        <img src="/asset/image/bus-logo.png" alt="">
                        <div class="">
                            <h1>BMS Poribohon</h1>
                            <p>B9A5 AC Buss</p>
                        </div>
                    </div>
                    <div class="flex min-w-40 font-medium size-10">
                        <img src="/asset/image/seat-green.png" alt="">
                        <span>40 seat left</span>
                    </div>
                </div>
                <div class="route-details bg-[#f7f8f8] padding-32 radius12">
                    <div class="flex justify-between m-5">
                        <p>Route</p>
                        <p>Rangpur-Dhaka</p>
                    </div>
                    <hr>
                    <div class="flex justify-between m-5">
                        <p>Departure Time</p>
                        <p>9:00 PM</p>
                    </div>
                    <hr>
                    <div class="flex justify-between m-5">
                        <div>Bording Point - Luxmipur</div>
                        <div>Dropping Point - Bogura</div>
                        <div>Est. Time - 11 Hour</div>
                    </div>
                </div>
            </div>
            <div>
                <img src="/asset/image/info-devider.png" alt="">
            </div>

            <div class="flex place-items-center">
                <div class="w-[133px] h-[155px]">
                    <img src="/asset/image/fare.png" alt="">
                    <div>
                        <h2>550 Taka</h2>
                        <h4>Per Seat</h4>
                    </div>
                </div>
            </div>
        </section>

        <!-- this section is seat selector -->
        <section class="seat-selector flex justify-between bg-[#ffffff]">
            <div class="left-select-seat">

                <div class="flex flex-col">
                    <h1 class="font-bold size-16">Select Your seat</h1>
                    <div class="flex justify-between">
                        <div class="flex">
                            <img src="/asset/image/seat-gray.png" alt="">
                            available
                        </div>
                        <div>
                            <img src="/asset/image/seat-green-filled.png" alt="">
                            <span>0</span>selected
                        </div>
                    </div>
                </div>

                <!-- seat Button -->
                <div style="display: grid; grid-template-columns: repeat(4, auto); gap: 10px;">
                    <!-- Row A -->
                    <div class="block">A1</div>
                    <div class="block">A2</div>
                    <div class="block">A3</div>
                    <div class="block">A4</div>

                    <!-- Row B -->
                    <div class="block">B1</div>
                    <div class="block">B2</div>
                    <div class="block">B3</div>
                    <div class="block">B4</div>

                    <!-- Row C -->
                    <div class="block">C1</div>
                    <div class="block">C2</div>
                    <div class="block">C3</div>
                    <div class="block">C4</div>

                    <!-- Row D -->
                    <div class="block">D1</div>
                    <div class="block">D2</div>
                    <div class="block">D3</div>
                    <div class="block">D4</div>

                    <!-- Row E -->
                    <div class="block">E1</div>
                    <div class="block">E2</div>
                    <div class="block">E3</div>
                    <div class="block">E4</div>

                    <!-- Row F -->
                    <div class="block">F1</div>
                    <div class="block">F2</div>
                    <div class="block">F3</div>
                    <div class="block">F4</div>

                    <!-- Row G -->
                    <div class="block">G1</div>
                    <div class="block">G2</div>
                    <div class="block">G3</div>
                    <div class="block">G4</div>

                    <!-- Row H -->
                    <div class="block">H1</div>
                    <div class="block">H2</div>
                    <div class="block">H3</div>
                    <div class="block">H4</div>

                    <!-- Row I -->
                    <div class="block">I1</div>
                    <div class="block">I2</div>
                    <div class="block">I3</div>
                    <div class="block">I4</div>

                    <!-- Row J -->
                    <div class="block">J1</div>
                    <div class="block">J2</div>
                    <div class="block">J3</div>
                    <div class="block">J4</div>
                </div>

            </div>
            <!-- this section is selected area calculation and form -->
            <div class="right-info-selected-seat">
                <h1>Your seat details</h1>
                <div>
                    <div>
                        <div>
                            <span>Seat <span>2</span></span>
                            <span>Class</span>
                            <span>Price</span>
                        </div>

                        <div>
                            <span>C2</span>
                            <span>Economy</span>
                            <span>550</span>
                        </div>
                        <div>
                            <span>C2</span>
                            <span>Economy</span>
                            <span>550</span>
                        </div>

                        <div>
                            <span>Total Price</span>
                            <span>BDT 1100</span>
                        </div>

                        <div>
                            <input type="text" placeholder="Have any coupon?">
                            <button>Apply</button>
                        </div>

                        <div>
                            Grand Total: BDT 1100
                        </div>
                    </div>
                    <div>
                        <form>
                            <label for="name">Passenger Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter full name" required>

                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="Enter phone number" required>

                            <label for="email">Email ID</label>
                            <input type="email" id="email" name="email" placeholder="Enter email address" required>

                            <button type="submit">Next</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </main>
</body>

</html>
