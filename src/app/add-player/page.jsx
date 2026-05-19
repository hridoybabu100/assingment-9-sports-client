"use client";

import {
  Button,
  Card,
  FieldError,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
} from "@heroui/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddPlayers = () => {
  const router = useRouter();

  const onSubMit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const newdata = Object.fromEntries(formdata.entries());

    const res = await fetch("http://localhost:5000/sports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newdata),
    });

    const data = await res.json();

    if (data) {
      toast.success("Player added successfully 🚀");
      router.push("/sports");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#050b18] via-[#07111f] to-[#0b1a33] px-4 py-10 font-sans">

      <div className="w-full max-w-4xl">

        {/* Title */}
        <h2 className="mb-10 text-center text-5xl font-black tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-500">
          Add New Player
        </h2>

        {/* Card */}
        <Card className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">

          <form onSubmit={onSubMit} className="p-6 sm:p-10 space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div className="md:col-span-2">
                <TextField name="name" isRequired>
                  <Label className="text-gray-300 font-medium">
                    Player Name
                  </Label>
                  <Input
                    placeholder="Tamim Iqbal"
                    className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <FieldError />
                </TextField>
              </div>

              {/* Team */}
              <Select name="team" isRequired className="w-full">
                <Label className="text-gray-300 font-medium">Team</Label>

                <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="RCB" textValue="RCB">
                      Royal Challengers Bengaluru
                    </ListBox.Item>
                    <ListBox.Item id="BD" textValue="Bangladesh">
                      Bangladesh National Team
                    </ListBox.Item>
                    <ListBox.Item id="Lakers" textValue="Lakers">
                      Los Angeles Lakers
                    </ListBox.Item>
                    <ListBox.Item id="InterMiami" textValue="Inter Miami">
                      Inter Miami
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Country */}
              <Select name="country" isRequired className="w-full">
                <Label className="text-gray-300 font-medium">Country</Label>

                <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-white">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="BD" textValue="Bangladesh">Bangladesh</ListBox.Item>
                    <ListBox.Item id="IN" textValue="India">India</ListBox.Item>
                    <ListBox.Item id="AU" textValue="Australia">Australia</ListBox.Item>
                    <ListBox.Item id="UK" textValue="England">England</ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>

              {/* Sports */}
              <TextField name="sports" isRequired>
                <Label className="text-gray-300 font-medium">
                  Sports Type
                </Label>
                <Input
                  placeholder="Cricket / Football"
                  className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                />
                <FieldError />
              </TextField>

              {/* Image */}
              <div className="md:col-span-2">
                <TextField name="image" isRequired>
                  <Label className="text-gray-300 font-medium">
                    Image URL
                  </Label>
                  <Input
                    type="url"
                    placeholder="https://image-link.com/player.jpg"
                    className="rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-cyan-500"
                  />
                  <FieldError />
                </TextField>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-2xl py-4 text-lg font-bold tracking-wide text-white bg-linear-to-r from-cyan-500 via-blue-600 to-indigo-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/30 active:scale-95"
            >
              🚀 Add Player
            </Button>

          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddPlayers;