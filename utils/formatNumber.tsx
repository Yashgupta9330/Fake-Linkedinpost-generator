export const formatNumber = (
  inputNumber: number,
  decimalPlaces?: number
): string | null => {
  // Return null if inputNumber is null
  if (inputNumber === null) {
    return null;
  }

  // Return "0" if inputNumber is zero
  if (inputNumber === 0) {
    return "0";
  }

  decimalPlaces = decimalPlaces || 0;

  // If decimalPlaces is undefined or less than 0, default it to 0
  decimalPlaces = !decimalPlaces || decimalPlaces < 0 ? 0 : decimalPlaces;

  // Split the number into mantissa and exponent parts
  let precisionParts: string[] = inputNumber.toPrecision(2).split("e");

  // Calculate the power index based on exponent
  let powerIndex;
  if (precisionParts.length === 1) {
    powerIndex = 0;
  } else {
    powerIndex = Math.floor(
      Math.min(Number(precisionParts[1].slice(1)), 14) / 3
    );
  }

  // Format the number by dividing by its power and applying decimal places
  let formattedNumber: string;
  if (powerIndex < 1) {
    formattedNumber = inputNumber.toFixed(0 + decimalPlaces);
  } else {
    formattedNumber = (inputNumber / Math.pow(10, powerIndex * 3)).toFixed(
      1 + decimalPlaces
    );
  }

  // Ensure negative zero is represented as zero
  let absoluteNumber =
    Number(formattedNumber) < 0
      ? formattedNumber
      : Math.abs(Number(formattedNumber));

  // Append power suffix based on power index
  let result = absoluteNumber + ["", "K", "M", "B", "T"][powerIndex];

  return result;
};
