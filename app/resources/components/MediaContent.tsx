"use client"

import { motion } from "framer-motion"
import YouTube from 'react-youtube'
import { FacebookEmbed } from 'react-social-media-embed'
import { resources } from '../data'
import { GalleryView } from './GalleryView'

export function MediaContent() {
  return (
    <div className="space-y-8">
      {resources.media.map((resource, index) => (
        <motion.div 
          key={resource.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-secondary rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8">
            <h3 className="text-2xl font-bold text-text mb-4">{resource.title}</h3>
            <p className="text-text-muted mb-6">{resource.description}</p>
          </div>
          <div className={`${resource.type === 'gallery' ? 'p-8 pt-0' : 'aspect-video'} w-full`}>
            {resource.type === 'video' ? (
              <YouTube
                videoId={resource.url}
                className="w-full h-full"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: { autoplay: 0 },
                }}
              />
            ) : resource.type === 'facebook' ? (
              <div className="w-full h-full relative" style={{ paddingTop: '56.25%' }}>
                <div className="absolute top-0 left-0 right-0 bottom-0">
                  <FacebookEmbed 
                    url={resource.url || ''}
                    width="100%"
                    height="100%"
                    style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
                  />
                </div>
              </div>
            ) : resource.type === 'gallery' && resource.folders ? (
              <GalleryView folders={resource.folders} />
            ) : null}
          </div>
        </motion.div>
      ))}
    </div>
  )
} 