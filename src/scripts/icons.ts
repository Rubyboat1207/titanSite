import type Engineering from "../components/icons/engineering.svelte";
import type Math from "../components/icons/math.svelte";
import type Science from "../components/icons/science.svelte";

export type IconType = typeof Engineering | typeof Math | typeof Science;

export enum IconColor {
    Normal="#A4FF84",
    Selected= "#FF7D7D",
}