
export type Equipment = {
    id: string
    name: string
    brand: string
    category: "computers" | "components" | "peripherals" | "monitors" | "printAndScans" | "networking"| "accessories" | "powerAndSafety" | "mobiles" | "itTools" | ""
    model?: string
    amount: number
    details?: string
}

 