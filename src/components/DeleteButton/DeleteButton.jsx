"use client";

import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

export function DeleteButton({ data }) {
  const { _id } = data;

  const handleDelete = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/sports/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
   
    });

    const deleteData = await res.json();

    if (deleteData) {
      toast.success("Delete success done.! check Your sports Info...");
      redirect("/sports");
    }
  };

  return (
    <AlertDialog>
      <Button className="flex w-full h-full  items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-red-500 to-rose-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/30">
        <FiTrash2 className="text-lg" />
        Delete
      </Button>
      <AlertDialog.Backdrop
        className="bg-linear-to-t from-red-950/90 via-red-950/50 to-transparent dark:from-red-950/95 dark:via-red-950/60"
        variant="blur"
      >
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-105">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header className="items-center text-center">
              <AlertDialog.Icon status="danger">
                <TriangleExclamation className="size-5" />
              </AlertDialog.Icon>
              <AlertDialog.Heading>
                Permanently delete your player info..?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This action cannot be undone. The player name :{" "}
                <span className="text-black font-bold text-2xl">
                  {data.name}
                </span>{" "}
                settings, and content will be permanently removed from our
                servers. The dramatic red backdrop emphasizes the severity and
                irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep Account
              </Button>
              <Button
                onClick={handleDelete}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Confirm Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
