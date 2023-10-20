const currentDate = new Date();
const year = currentDate.getFullYear().toString();
const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
const day = currentDate.getDate().toString().padStart(2, "0");

export const Today = `${year}-${month}-${day}`;
export function hasDuplicates(array) {
  return new Set(array).size !== array.length;
}
