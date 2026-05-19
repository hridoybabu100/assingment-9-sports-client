"use client";

import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  Card,
} from "@heroui/react";
import { Edit2Icon, Edit3Icon } from "lucide-react";
import { redirect } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { toast } from "react-toastify";

export function EditModal({ data }) {

    const {_id} = data;
  // console.log('edit page data', data);

  const onSubMit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.currentTarget);
    const newdata = Object.fromEntries(formdata.entries());



    
        const res = await fetch(`http://localhost:5000/sports/${_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newdata),
        });
    
        const editdata = await res.json();
    
        if (editdata) {
          toast.success("Edit successfully done.! check Your Info...");
          redirect("/sports");
        }

    console.log('new data', newdata);
    
  };

  return (
    <Modal>
      <Button className="flex w-full h-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-emerald-500 to-green-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/30">
        <FiEdit className="text-lg" />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit2Icon className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Player Info...</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and  get back to you. The modal
                adapts automatically when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <Card className="rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl">
                  <form onSubmit={onSubMit} className="p-6 sm:p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.name} name="name" isRequired>
                          <Label className="text-black font-medium">
                            Player Name
                          </Label>
                          <Input
                            placeholder="Tamim Iqbal"
                            className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500 placeholder:text-gray-500 focus:border-cyan-500"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Team */}
                      <Select defaultValue={data.team} name="team" isRequired className="w-full">
                        <Label className="text-black font-medium">
                          League Name
                        </Label>

                        <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            <ListBox.Item
                            
                              id="Indian Premier League (IPL)"
                              textValue="Indian Premier League (IPL)"
                            >
                              Indian Premier League (IPL)
                            </ListBox.Item>
                            <ListBox.Item
                              id="Bangladesh Premier League (BPL)"
                              textValue="Bangladesh Premier League (BPL)"
                            >
                              Bangladesh Premier League (BPL)
                            </ListBox.Item>
                            <ListBox.Item
                              id="International League T20 (ILT20)"
                              textValue="International League T20 (ILT20)"
                            >
                              International League T20 (ILT20)
                            </ListBox.Item>
                            <ListBox.Item
                              id="The Hundred"
                              textValue="The Hundred"
                            >
                              The Hundred
                            </ListBox.Item>
                            <ListBox.Item
                              id="The Major League Soccer (MLS)"
                              textValue="Major League Soccer (MLS)"
                            >
                              Major League Soccer (MLS)
                            </ListBox.Item>
                            <ListBox.Item id="The La Liga" textValue="La Liga">
                              La Liga
                            </ListBox.Item>
                            <ListBox.Item
                              id="Brazilian Série A"
                              textValue="Brazilian Série A"
                            >
                              Brazilian Série A
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      {/* Country */}
                      <Select defaultValue={data.country} name="country" isRequired className="w-full">
                        <Label className="text-black font-medium">
                          Country
                        </Label>

                        <Select.Trigger className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                        
                          <ListBox>
                            
                            <ListBox.Item
                              id="Bangladesh"
                              textValue="Bangladesh"
                            >
                              Bangladesh
                            </ListBox.Item>
                            <ListBox.Item  id="India" textValue="India">
                              India
                            </ListBox.Item>
                            <ListBox.Item id="Australia" textValue="Australia">
                              Australia
                            </ListBox.Item>
                            <ListBox.Item id="EngLand" textValue="England">
                              England
                            </ListBox.Item>
                            <ListBox.Item id="Brazil" textValue="Brazil">
                              Brazil
                            </ListBox.Item>
                            <ListBox.Item id="Arjentina" textValue="Arjentina">
                              Arjentina
                            </ListBox.Item>
                            <ListBox.Item id="France" textValue="France">
                              France
                            </ListBox.Item>
                          </ListBox>
                        </Select.Popover>
                      </Select>

                      {/* Sports */}
                      <TextField defaultValue={data.sports} name="sports" isRequired>
                        <Label className="text-black font-medium">
                          Sports Type
                        </Label>
                        <Input
                          placeholder="Cricket / Football"
                          className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500 placeholder:text-gray-500 focus:border-cyan-500"
                        />
                        <FieldError />
                      </TextField>

                      {/* Image */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.image} name="image" isRequired>
                          <Label className="text-black font-medium">
                            Image URL
                          </Label>
                          <Input
                            type="url"
                            placeholder="https://image-link.com/player.jpg"
                            className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500 placeholder:text-gray-500 focus:border-cyan-500"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Sports */}
                      <TextField defaultValue={data.salary} name="salary" isRequired>
                        <Label className="text-black font-medium">
                          Salary
                        </Label>
                        <Input
                          placeholder="150000"
                          className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500 placeholder:text-gray-500 focus:border-cyan-500"
                        />
                        <FieldError />
                      </TextField>
                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField defaultValue={data.description} name="description" isRequired>
                          <Label>Description</Label>
                          <TextArea
                            placeholder="Describe the player..."
                            className="rounded-2xl bg-white/5 border border-white/10 text-cyan-500 placeholder:text-gray-500 focus:border-cyan-500"
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
                      <Edit3Icon></Edit3Icon> Edit Player
                    </Button>
                  </form>
                </Card>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
