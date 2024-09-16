import { BaseSelectType } from "@/constants/options";

const OptionCardGrid = <T extends BaseSelectType, U>({
  options,
  value,
  selectProps,
}: {
  options: T[];
  value: T[keyof T];
  selectProps: { name: U; value: keyof T; onClick: (name: U, value: T[keyof T]) => void };
}) => {
  return (
    <div className="grid grid-cols-3 gap-5 mt-5">
      {options.map((option) => {
        const selected = value === option[selectProps.value];
        return (
          <button
            key={option.id}
            className={`p-4 border cursor-pointer rounded-lg hover:shadow-lg ${selected && "shadow-lg border-black"}`}
            onClick={() => selectProps.onClick(selectProps.name, option[selectProps.value])}
          >
            <h2 className="text-4xl">{option.icon}</h2>
            <h2 className="font-bold text-lg">{option.title}</h2>
            <h2 className="text-sm text-gray-500">{option.description}</h2>
          </button>
        );
      })}
    </div>
  );
};

export default OptionCardGrid;
