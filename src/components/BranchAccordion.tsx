import React from "react";
import { MapPin, Phone, Instagram } from "lucide-react";
import { FaTiktok, FaYoutube } from "react-icons/fa6";
import Link from "next/link";
import { branchOffices } from "@/lib/branchData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BranchAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {branchOffices.map((branch) => (
        <AccordionItem key={branch.id} value={`item-${branch.id}`}>
          <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-yellow-600">
            {branch.name}
          </AccordionTrigger>
          <AccordionContent className="space-y-3 pt-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
              <p className="text-gray-600">{branch.address}</p>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <Link
                href={`https://wa.me/${branch.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 underline"
              >
                {branch.phone}
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <Link
                href={`https://instagram.com/${branch.instagram.replace(
                  "@",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-yellow-600 underline"
              >
                {branch.instagram}
              </Link>
            </div>

            {branch.tiktok && (
              <div className="flex items-center space-x-3">
                <FaTiktok className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <Link
                  href={`https://tiktok.com/${branch.tiktok.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 underline"
                >
                  {branch.tiktok}
                </Link>
              </div>
            )}

            {branch.youtube && (
              <div className="flex items-center space-x-3">
                <FaYoutube className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <Link
                  href={`https://youtube.com/${branch.youtube.replace(
                    "@",
                    ""
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow-600 underline"
                >
                  {branch.youtube}
                </Link>
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default BranchAccordion;
