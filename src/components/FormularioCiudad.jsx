import React from "react";

export const FormularioCiudad = () => {
  return (
    <div className="flex-1 text-orange-500 text-base mx-auto my-auto">
      <form action="">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="uppercase tracking-wide text-black text-xs font-bold mb-2"
            for="company"
          >
            Ciudad:
          </label>
          <input
            class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
            id="company"
            type="text"
            placeholder="Ingrese una ciudad para consultar el clima"
          />

          <div class="inline-block relative w-64">
            <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Ingrese una ciudad para consultar el clima</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
