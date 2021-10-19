const featuredHouses = document.querySelector("#featured-houses");

featuredHouses.innerHTML = `<p>test</p>`;
console.log(featuredHouses);

const card = `<div class="flex-1 px-4 md:1/2 lg:1/3 xl:w-1/4">
          <div class="border p-2.5 rounded-lg bg-white w-full">
            <!-- top section -->
            <div class="relative">
              <!-- image -->
              <img
                src="assets/images/house_cards/house_1.png"
                alt="house with balcony"
                class="object-cover w-full rounded-lg h-86"
              />
              <!-- tag -->
              <div class="house-card__tag house-card__tag--new-house">
                New House
              </div>
            </div>
            <!-- title section -->
            <div class="flex justify-between mt-3.5">
              <!-- title -->
              <h4 class="inline-flex items-center text-grey-800">
                Verdun, Montreal
              </h4>
              <!-- icons -->
              <div class="inline-flex items-center flex-none">
                <!-- bedrooms -->
                <div class="inline-block">
                  <div class="text-center">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="inline-block"
                    >
                      <path
                        d="M4.01701 15.228C4.01701 15.228 3.00223 15.228 3.00223 14.2132C3.00223 13.1984 4.01701 10.1541 9.0909 10.1541C14.1648 10.1541 15.1796 13.1984 15.1796 14.2132C15.1796 15.228 14.1648 15.228 14.1648 15.228H4.01701ZM9.0909 9.13933C9.89831 9.13933 10.6726 8.81859 11.2436 8.24766C11.8145 7.67674 12.1352 6.9024 12.1352 6.09499C12.1352 5.28759 11.8145 4.51325 11.2436 3.94232C10.6726 3.3714 9.89831 3.05066 9.0909 3.05066C8.28349 3.05066 7.50915 3.3714 6.93823 3.94232C6.36731 4.51325 6.04656 5.28759 6.04656 6.09499C6.04656 6.9024 6.36731 7.67674 6.93823 8.24766C7.50915 8.81859 8.28349 9.13933 9.0909 9.13933Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div class="text-center text-xxxs">3 Bedroom</div>
                </div>
                <!-- wifi -->
                <div class="inline-block pl-1.5">
                  <div class="text-center">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      class="inline-block"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.60449 4.65059C10.9625 4.65059 13.1625 5.55259 14.7998 7.18993L15.7425 6.24726C13.8538 4.35793 11.3185 3.31726 8.60449 3.31726C5.89049 3.31793 3.35516 4.35793 1.46649 6.24726L2.40916 7.18993C4.04649 5.55259 6.24649 4.65059 8.60449 4.65059ZM12.3852 10.1886C10.3358 8.13926 6.87316 8.13926 4.82383 10.1886L5.76649 11.1313C7.30449 9.59326 9.90449 9.59326 11.4425 11.1313L12.3852 10.1886Z"
                        fill="#333333"
                      />
                      <path
                        d="M14.2291 8.17933C11.1811 5.13 6.02847 5.13 2.98047 8.17933L3.92314 9.122C6.46114 6.584 10.7485 6.584 13.2865 9.122L14.2291 8.17933Z"
                        fill="#333333"
                      />
                      <path
                        d="M8.60448 13.9839C9.34086 13.9839 9.93782 13.387 9.93782 12.6506C9.93782 11.9142 9.34086 11.3173 8.60448 11.3173C7.8681 11.3173 7.27115 11.9142 7.27115 12.6506C7.27115 13.387 7.8681 13.9839 8.60448 13.9839Z"
                        fill="#333333"
                      />
                    </svg>
                  </div>
                  <div class="text-center text-xxxs">Wi-Fi</div>
                </div>
              </div>
            </div>
            <!-- price -->
            <div class="mt-3.5">
              <p>
                <span class="inline-block text-xs leading-7 align-top">$</span
                ><span class="inline-block text-xl">200,000</span
                ><span class="inline-block text-xs leading-7 align-bottom">
                  &nbsp;/anum</span
                >
              </p>
            </div>
            <!-- interest -->
            <div class="mt-3.5">
              <!-- avatars -->
              <div class="relative inline-block min-w-15">
                <img
                  src="assets/images/house_cards/placeholder_avatar_1.jpeg"
                  class="inline-block object-cover rounded-full h-7 w-7"
                  alt="user 1 avatar"
                />
                <img
                  src="assets/images/house_cards/placeholder_avatar_2.png"
                  class="absolute inline-block object-cover rounded-full  left-4 h-7 w-7"
                  alt="user 1 avatar"
                />
                <span class="absolute inline-block left-8 h-7 w-7">
                  <span class="relative inline-block w-full h-full">
                    <img
                      src="assets/images/house_cards/placeholder_avatar_3.jpeg"
                      class="inline-block object-cover w-full h-full rounded-full "
                      alt="user 1 avatar"
                    />
                    <span
                      class="absolute font-bold text-white transform -translate-x-1/2 -translate-y-1/2  text-xxs left-1/2 top-1/2"
                      >+30</span
                    >
                  </span>
                </span>
              </div>
              <!-- text -->
              <p class="inline-block text-xxs">
                have interest in this property
              </p>
            </div>
            <!-- view more button -->
            <div class="flex justify-center w-full mt-5 text-white">
              <a href="#" class="px-12 btn-standard"
                >View More
                <svg
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                  class="inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.38233 6.27924H14.3339L10.3698 9.32648C10.278 9.39715 10.2089 9.4787 10.1664 9.56647C10.1238 9.65424 10.1087 9.74652 10.1219 9.83802C10.1485 10.0228 10.2888 10.1933 10.5118 10.3119C10.7348 10.4306 11.0223 10.4876 11.3111 10.4706C11.5999 10.4536 11.8662 10.3638 12.0516 10.2211L17.5118 6.02764C17.5485 5.99428 17.5814 5.95924 17.6101 5.9228C17.6101 5.88786 17.6647 5.86689 17.6865 5.83194C17.736 5.75181 17.7619 5.6665 17.763 5.58034C17.7619 5.49417 17.736 5.40887 17.6865 5.32873C17.6865 5.29379 17.6319 5.27282 17.6101 5.23787C17.5814 5.20143 17.5485 5.16639 17.5118 5.13304L12.0516 0.939596C11.9489 0.860702 11.8203 0.797255 11.675 0.753768C11.5297 0.710281 11.3711 0.687823 11.2107 0.68799C10.9555 0.687671 10.7083 0.744544 10.5118 0.848738C10.4012 0.907411 10.3098 0.979468 10.2428 1.06078C10.1758 1.1421 10.1345 1.23108 10.1214 1.32262C10.1082 1.41416 10.1233 1.50646 10.166 1.59425C10.2086 1.68203 10.2779 1.76357 10.3698 1.8342L14.3339 4.88143H1.38233C1.0927 4.88143 0.814933 4.95507 0.610135 5.08614C0.405337 5.21721 0.290283 5.39498 0.290283 5.58034C0.290283 5.7657 0.405337 5.94347 0.610135 6.07454C0.814933 6.20561 1.0927 6.27924 1.38233 6.27924Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>`;
