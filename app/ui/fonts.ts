import { Alexandria, Bokor, Inter, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const alexandria = Alexandria({ subsets: ["latin"] });
export const bokor = Bokor({ weight: "400" });
export const lusitana = Lusitana({
	weight: ["400", "700"],
	subsets: ["latin"],
});
