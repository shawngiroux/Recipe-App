<div class="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-5 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
    <div class="flex-shrink-0">
        <img class="h-16 y-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwolper.com.au%2Fwp-content%2Fuploads%2F2017%2F10%2Fimage-placeholder.jpg&f=1&nofb=1" alt="">
    </div>
    <div>
        <div class="text-xl font-medium text-black">{{ $name }}</div>
        <div class="flex">
            <div class="flex items-center">
                <svg class="text-grey-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <p class="text-gray-500 mx-1">Cook Time: {{ $cookTime }} Min</p>
            </div>
            <div class="flex items-center mx-5">
                <svg class="text-grey-500 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
                <p class="text-gray-500 mx-1">Prep Time: {{ $prepTime }} Min</p>
            </div>
        </div>
    </div>
</div>
