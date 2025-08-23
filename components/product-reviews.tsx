"use client"

import { Star, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface Review {
  id: number
  name: string
  rating: number
  date: string
  comment: string
}

interface ProductReviewsProps {
  reviews: Review[]
  rating: number
  totalReviews: number
}

export function ProductReviews({ reviews, rating, totalReviews }: ProductReviewsProps) {
  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((stars) => {
    const count = reviews.filter((review) => review.rating === stars).length
    const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0
    return { stars, count, percentage }
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="font-heading">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Overall Rating */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="font-heading font-bold text-3xl text-gray-900">{rating}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <p className="font-body text-mi-secondary">Based on {totalReviews} reviews</p>
            </div>

            {/* Rating Distribution */}
            <div className="space-y-2">
              {ratingDistribution.map(({ stars, count, percentage }) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="font-body text-sm w-8">{stars}★</span>
                  <Progress value={percentage} className="flex-1 h-2" />
                  <span className="font-body text-sm text-mi-secondary w-8">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="font-body text-sm text-mi-secondary">{formatDate(review.date)}</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="text-mi-secondary hover:text-mi-primary">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  Helpful
                </Button>
              </div>
              <p className="font-body text-gray-700 leading-relaxed">{review.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Reviews */}
      {reviews.length < totalReviews && (
        <div className="text-center">
          <Button
            variant="outline"
            className="border-mi-primary text-mi-primary hover:bg-mi-primary hover:text-white bg-transparent"
          >
            Load More Reviews
          </Button>
        </div>
      )}
    </div>
  )
}
