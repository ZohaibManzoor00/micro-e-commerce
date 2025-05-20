import { Button } from "@/components/button";
import { Field } from "@/components/fieldset";
import { Heading } from "@/components/heading";
import { Input, InputGroup } from "@/components/input";
import { Select } from "@/components/select";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Divider } from "@/components/divider";
import { PlusIcon } from "@heroicons/react/16/solid";
import { ProjectCard } from "../_components/project-card";
import ProjectGallery from "../_components/project-gallery";

export default function ProjectsPage() {
  return (
    <>
      <div className="flex justify-between items-center">
        <Heading>Projects</Heading>
        <Button>
          <PlusIcon />
          Add project
        </Button>
      </div>
      <div className="h-4" />
      <SearchAndFilter />
      <div className="h-10" />
      <Divider />
      <div className="h-6" />

      <ProjectGallery />
      
    </>
  );
}

function SearchAndFilter() {
  return (
    <div className="flex gap-x-4 pb-2 md:pb-0">
      <InputGroup role="search">
        <MagnifyingGlassIcon />
        <Input
          name="search"
          placeholder="Search projects&hellip;"
          aria-label="Search project"
        />
      </InputGroup>
      <Field>
        <Select name="status">
          <option value="active">Sort by active</option>
          <option value="paused">Sort by paused</option>
          <option value="completed">Sort by completed</option>
          <option value="canceled">Sort by cancelled</option>
        </Select>
      </Field>
    </div>
  );
}
