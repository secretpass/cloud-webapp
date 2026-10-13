"use client";
import { Card, Tabs, ToggleButton, ToggleButtonGroup } from "@heroui/react";
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
        <Card.Title className="flex gap-2 items-center text-lg">
          <Icon className="size-5" />
          {title}
          <div className="grow" />
          {cloud_support && <IconCloud className="text-muted size-4" />}
          {local_support && <IconDeviceLaptop className="text-muted size-4" />}
        </Card.Title>
      </Card.Header>
      <Card.Content className="text-sm text-muted font-semibold">
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
    <section id="features" className="container py-12 sm:py-16 mx-1 sm:mx-auto">
      <div className="mb-4 flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Secrets that grow with you
        </h2>
        <p className="max-w-3xl text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Features designed to allow you to grow from solo projects to large
          multi-product organizations
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <Tabs
          selectedKey={desired_features}
          onSelectionChange={(value) =>
            setDesiredFeatures(value as FeatureAvailability)
          }
        >
          <Tabs.ListContainer>
            <Tabs.List>
              <Tabs.Tab id="all" className="h-auto py-0.5 gap-2">
                <Logo className="size-4" />
                all
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="cloud" className="h-auto py-0.5 gap-2">
                <IconCloud className="size-4" />
                cloud
                <Tabs.Indicator />
              </Tabs.Tab>
              <Tabs.Tab id="local" className="h-auto py-0.5 gap-2">
                <IconDeviceLaptop className="size-4" />
                local
                <Tabs.Indicator />
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8">
        {features.map((item) => (
          <FeatureItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
