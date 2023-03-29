import type { Control, Layer, Map } from 'leaflet';
import type { UseLayersControlApiReturn } from 'src/composables/api';
import type { InjectionKey, Ref } from 'vue';

export const mapKey = Symbol(
  import.meta.env.MODE === 'development' || import.meta.env.MODE === 'test'
    ? 'Map'
    : ''
) as InjectionKey<Ref<Map | null>>;

export const layerKey = Symbol(
  import.meta.env.MODE === 'development' || import.meta.env.MODE === 'test'
    ? 'Layer'
    : ''
) as InjectionKey<Ref<Layer | null>>;

export const controlKey = Symbol(
  import.meta.env.MODE === 'development' || import.meta.env.MODE === 'test'
    ? 'Control'
    : ''
) as InjectionKey<Ref<Control | null>>;

export const apiKeys = Object.freeze({
  layersControlKey: Symbol(
    import.meta.env.MODE === 'development' || import.meta.env.MODE === 'test'
      ? 'LayersControlApi'
      : ''
  ) as InjectionKey<UseLayersControlApiReturn>
});
