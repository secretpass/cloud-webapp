"use client";
import { Card, ToggleButton, ToggleButtonGroup } from "@heroui/react";
import { IconCloud, IconDeviceLaptop } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { Logo } from "@/components";
import {
  type FeatureAvailability,
  feature_items,
  type IFeatureItem,
} from "./items";

function FeatureItem({
  item: { Icon, availability, description, title },
}: {
  item: IFeatureItem;
}) {
  const cloud_support = availability === "all" || availability === "cloud";
  const local_support = availability === "all" || availability === "local";
  return (
    <Card>
      <Card.Header>
        <Card.Title className="flex gap-2 items-center text-lg text-gray-600 dark:text-gray-400">
          <Icon className="size-5" />
          {title}
          <div className="grow" />
          {cloud_support && <IconCloud className="text-muted size-4" />}
          {local_support && <IconDeviceLaptop className="text-muted size-4" />}
        </Card.Title>
      </Card.Header>
      <Card.Content className="text-base text-gray-700 dark:text-gray-300">
        {description}
      </Card.Content>
    </Card>
  );
}

export function FeaturesSection() {
  const [desired_features, setDesiredFeatures] =
    useState<FeatureAvailability>("all");

  const features = useMemo(
    () =>
      feature_items.filter(
        (item) =>
          desired_features === "all" ||
          item.availability === "all" ||
          item.availability === desired_features,
      ),
    [desired_features],
  );

  return (
    <section id="features" className="container py-24 sm:py-32 mx-auto">
      <div className="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Secrets that grow with you.
        </h2>
        <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Start locally with a single user, grow locally or on the cloud with
          multiple user's with a self hosted option.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <ToggleButtonGroup
          selectionMode="single"
          isDetached
          selectedKeys={[desired_features]}
          onSelectionChange={(value) =>
            setDesiredFeatures(
              value.values().next().value as FeatureAvailability,
            )
          }
          size="sm"
        >
          <ToggleButton id="all" variant="ghost">
            <Logo className="size-4" />
            all
          </ToggleButton>
          <ToggleButton id="cloud" variant="ghost">
            <IconCloud className="size-4" />
            cloud
          </ToggleButton>
          <ToggleButton id="local" variant="ghost">
            <IconDeviceLaptop className="size-4" />
            local
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 2xl:grid-cols-3 gap-8">
        {features.map((item) => (
          <FeatureItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
