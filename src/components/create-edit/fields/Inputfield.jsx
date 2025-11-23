export default function Inputfield({
    name,
    type,
    label,
    validationRulls,
    valClass,
    register,
}) {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm/6 font-medium text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    {...register(name, validationRulls)}
                    id={name}
                    type={type}
                    autoComplete={name}
                    className={
                        valClass[name]
                            ? "border-2 border-red-700 block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400  sm:text-sm/6"
                            : "block w-full rounded-md bg-green-200/50 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-400 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-green-700 sm:text-sm/6"
                    }
                />
            </div>
            {valClass[name] && (
                <p className="text-red-700">{valClass[name].message}</p>
            )}
        </div>
    );
}
