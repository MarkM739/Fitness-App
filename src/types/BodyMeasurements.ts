export interface BodyMeasurement {
    weight: number
    height: number
    chest: number
    waist: number
    hips: number
}

export interface BodyMeasurementLog {
    [string: string]: BodyMeasurement
}