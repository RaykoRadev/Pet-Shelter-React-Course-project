import { useEffect, useState } from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function Test() {
    const [location, setLocation] = useState({ lat: 43.24314, lng: 26.5674 });

    return (
        <>
            <div className="bg-green-200   flex items-center  n justify-center overflow-hidden z-50 ">
                <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row py-16 mt-10">
                        <div className="lg:max-w-6xl lg:pr-5 relative z-40">
                            <h2 className="mx-auto mb-10 max-w-lg text-6xl font-medium leading-snug tracking-tight text-g1 text-center sm:leading-snug ">
                                About Us
                            </h2>
                            <div className=" flex gap-10  ">
                                <div className="w-220  border border-gray-400 rounded overflow-hidden">
                                    <ul className="divide-y divide-gray-400 text-lg text-slate-900">
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Name:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                Rayko Radev
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Email:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                rayko_radev@yahoo.com
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Addrress:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                Bulgaria, Targovishte, Treti
                                                Mart 34
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Postcode:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                7700
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Phone:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                +359899500426
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="min-w-fit hidden  lg:block  border-3 border-green-700 rounded overflow-hidden ">
                                    {" "}
                                    {/* map container */}
                                    <MapContainer
                                        center={[location.lat, location.lng]}
                                        zoom={15}
                                        className="h-113 w-110 "
                                    >
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <Marker
                                            position={[
                                                location.lat,
                                                location.lng,
                                            ]}
                                        >
                                            <Popup>
                                                Latitude:{" "}
                                                {location.lat.toFixed(4)},
                                                Longitude:{" "}
                                                {location.lng.toFixed(4)}
                                            </Popup>
                                        </Marker>
                                    </MapContainer>
                                </div>

                                <div className="w-220  border border-gray-400 rounded overflow-hidden">
                                    <ul className="divide-y divide-gray-400 text-lg text-slate-900">
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Name:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                Petkan Petkanov
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Email:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                petkan@abv.bg
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Addrress:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                Bulgaria, Targovishte, Slyncheva
                                                livada 16
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Postcode:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                7700
                                            </div>
                                        </li>
                                        <li className="w-full px-4 py-3">
                                            <div className="font-medium text-green-900">
                                                Phone:
                                            </div>
                                            <div className="text-lg text-black font-normal mt-1">
                                                +123456789
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div style={{ height: "100vh", width: "100%" }}>
                <h2>Map with Predefined Coordinates</h2>
                <MapContainer
                    center={[location.lat, location.lng]}
                    zoom={13}
                    style={{ height: "90%", width: "100%" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[location.lat, location.lng]}>
                        <Popup>
                            Latitude: {location.lat.toFixed(4)}, Longitude:{" "}
                            {location.lng.toFixed(4)}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div> */}
        </>
    );
}
