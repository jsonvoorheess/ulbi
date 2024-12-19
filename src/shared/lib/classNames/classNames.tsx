
type Mods = Record<string, boolean>

export function classNames(cls:string, mods?:Mods, additional?: string[]):string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([_, value]) => value)
            .map(([key]) => key)
    ].join(" ")
}