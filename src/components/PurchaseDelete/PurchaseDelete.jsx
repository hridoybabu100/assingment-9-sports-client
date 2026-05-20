"use client";

import { TriangleExclamation } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export function PurchaseDelete({ player, purchaseId }) {
  //   console.log(purchaseId);

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/purchase/${purchaseId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const deleteData = await res.json();
    // console.log('Delete', deleteData);
    if (deleteData) {
      toast.success(
        `The purchase player is ${player.playername} parmanetly delete.`,
      );
      redirect("/sports");
    }
  };

  return (
    <AlertDialog>
      <Button variant="danger">Cancle Purchase</Button>
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
                Permanently cancle your purchase player?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                The player name{" "}
                <span className="text-2xl font-bold text-red-400">
                  {player.playername}
                </span>{" "}
                The dramatic red backdrop emphasizes the severity and
                irreversibility of this decision.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer className="flex-col-reverse">
              <Button className="w-full" slot="close">
                Keep cancle
              </Button>
              <Button
                onClick={handleDelete}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Cancle parmanently
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
