export default function UserFeatures() {
  return (
    <div className="py-small-y md:py-large-y px-mobile sm:px-tablet md:px-desktop">
      <h1 className="text-[25px] font-bold text-dark-100 md:text-[36px]">
        Featured Travel Destinations
      </h1>
      <p className="text-gray-100">
        Check out some of the best places you can visit around the world.
      </p>
      <div className="mt-4 gap-[30px] md:mt-6 md:grid md:grid-cols-4">
        <div className="md:col-start-1 md:col-end-4 md:flex md:h-[630px] md:flex-col md:gap-[30px]">
          <div className="relative mb-5 h-[200px] overflow-hidden rounded-lg md:mb-0 md:h-[300px]">
            <img
              src="/card-img-1.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1ab5_0%,_#1a1a1a7a_40%,_transparent_100%)]" />

            <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
              <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                3.5
              </p>
              <div>
                <p className="text-[30px] font-bold text-white">
                  Barcelona Tour
                </p>
                <p className="text-white">196 activities</p>
              </div>
            </div>
          </div>

          <div className="md:flex md:gap-[30px]">
            <div className="relative mb-5 h-[200px] overflow-hidden rounded-lg md:mb-0 md:h-[300px] md:flex-1">
              <img
                src="/card-img-2.png"
                alt=""
                className="absolute h-[100%] w-[100%]"
              />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1a83_0%,_#1a1a1a37_60%,_transparent_100%)]" />

              <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
                <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                  3.5
                </p>
                <div>
                  <p className="text-[30px] font-bold text-white">
                    London Tour
                  </p>
                  <p className="text-white">196 activities</p>
                </div>
              </div>
            </div>
            <div className="relative mb-5 h-[200px] overflow-hidden rounded-lg md:mb-0 md:h-[300px] md:flex-1">
              <img
                src="/card-img-3.png"
                alt=""
                className="absolute inset-0 h-[100%] w-[100%]"
              />
              <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1aa8_0%,_#1a1a1a21_50%,_transparent_100%)]" />

              <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
                <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                  3.5
                </p>
                <div>
                  <p className="text-[30px] font-bold text-white">
                    Australia Tour
                  </p>
                  <p className="text-white">196 activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-y-[30px] md:flex md:min-h-[630px] md:flex-col">
          <div className="relative mb-5 h-[190px] overflow-hidden rounded-lg md:mb-0">
            <img
              src="/card-img-4.png"
              alt=""
              className="absolte inset-0 h-[100%] w-[100%]"
            />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1a84_0%,_#1a1a1a21_50%,_transparent_100%)]" />

            <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
              <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                3.5
              </p>
              <div>
                <p className="text-[25px] font-bold text-white">Italy Tour</p>
                <p className="text-white">196 activities</p>
              </div>
            </div>
          </div>
          <div className="relative mb-5 h-[190px] overflow-hidden rounded-lg md:mb-0">
            <img src="/card-img-5.png" alt="" className="h-[100%] w-[100%]" />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1a84_0%,_#1a1a1a21_60%,_transparent_100%)]" />

            <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
              <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                3.5
              </p>
              <div>
                <p className="text-[25px] font-bold text-white">
                  philippines Tour
                </p>
                <p className="text-white">196 activities</p>
              </div>
            </div>
          </div>
          <div className="relative mb-5 h-[190px] overflow-hidden rounded-lg md:mb-0">
            <img src="/card-img-6.png" alt="" className="h-[100%] w-[100%]" />
            <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,_#1a1a1a84_0%,_#1a1a1a21_60%,_transparent_100%)]" />

            <div className="absolute left-0 top-0 z-20 flex h-full flex-col justify-between py-6 pl-6">
              <p className="w-fit rounded-2xl bg-white px-4 font-bold text-red-100 shadow-xl">
                3.5
              </p>
              <div>
                <p className="text-[25px] font-bold text-white">Japan Tour</p>
                <p className="text-white">196 activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
