<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class SkillResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
          'id' => $this->id,
          'name' => $this->name, 
          'slug' => $this->slug
        ];
        // 'slug' => route('skills.show', $this->slug)
    }
}
