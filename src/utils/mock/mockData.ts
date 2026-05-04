/** Dev: localhost mock. Prod: set `VITE_API_BASE_URL` on the host if you run the mock API elsewhere. */
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.trim() ||
  (import.meta.env.DEV ? "http://localhost:3000" : "");


export const SAMPLE_USERS = [
  {
	id: "1",
	name: "Livia Bator",
	role: "CEO",
	image: "/lovable-uploads/d8b5e68c-5784-42e3-95d5-78cbd7d742b1.png",
  },
  {
	id: "2",
	name: "Randy Press",
	role: "Director",
	image: "/lovable-uploads/d8b5e68c-5784-42e3-95d5-78cbd7d742b1.png",
  },
  {
	id: "3",
	name: "Workman",
	role: "Designer",
	image: "/lovable-uploads/d8b5e68c-5784-42e3-95d5-78cbd7d742b1.png",
  },
];